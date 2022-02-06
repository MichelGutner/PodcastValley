import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, {
  Event,
  RepeatMode,
  usePlaybackState,
} from 'react-native-track-player';

const Controller = ({ onNext, onPrv }) => {
  const playbackState = usePlaybackState();
  const isPlaying = useRef('paused'); //paused play loading
  const [reapeatMode, setReapeatMode] = useState('off')

  //repeat music session
  const reapeatIcon = () => {
    if (reapeatMode === 'off') {
      return 'repeat-off'
    }
    if (reapeatMode === 'track') {
      return 'repeat-once'
    }
    if (reapeatMode === 'repeat') {
      return 'repeat'
    }
  }

  const changeRepeatMode = () => {
    if (reapeatMode === 'off') {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setReapeatMode('track')
    }
    if (reapeatMode === 'track') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setReapeatMode('repeat')
    }
    if (reapeatMode === 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setReapeatMode('off')
    }
  }

  useEffect(() => {
    console.log('Player State', playbackState);

    //set the player state
    if (playbackState === 'playing' || playbackState === 3) {
      isPlaying.current = 'playing';
    } else if (playbackState === 'paused' || playbackState === 2) {
      isPlaying.current = 'paused';
    } else {
      isPlaying.current = 'loading';
    }
  }, [playbackState]);

  const returnPlayBtn = () => {
    switch (isPlaying.current) {
      case 'playing':
        return <Icon color="orange" name="pause" size={25} />;
      case 'paused':
        return <Icon color="#fff" name="play" size={25} />;
      default:
        return <ActivityIndicator size={25} color="#fff" />;
    }
  };

  const onPlayPause = () => {
    if (isPlaying.current === 'playing') {
      TrackPlayer.pause();
    } else if (isPlaying.current === 'paused') {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon color="#fff" name="shuffle" size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPrv}>
        <Icon color="#fff" name="skip-previous" size={20} />
      </TouchableOpacity>
      <View style={{ position: 'relative', top: 20, }}>
        <TouchableOpacity style={styles.buttonOnPlayPause} onPress={onPlayPause}>
          {returnPlayBtn()}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onNext}>
        <Icon color="#fff" name="skip-next" size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={changeRepeatMode}>
        <Icon
          color={ reapeatMode !== 'off' ? "orange" : '#fff'} 
          name={`${reapeatIcon()}`} 
          size={20} />
      </TouchableOpacity>
    </View>
  );
}

export default Controller;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: 280,
  },
  buttonOnPlayPause: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60, height: 60,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
  }
});
