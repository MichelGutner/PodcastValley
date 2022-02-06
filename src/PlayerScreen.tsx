import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
} from 'react-native';

import TrackPlayer, {
  State,
  Capability,
  Event,
  RepeatMode,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents
} from 'react-native-track-player';

import Controller from './Controller';
import SliderComp from './SliderComp';
import songs from "./data"


const { width, height } = Dimensions.get('window');

// call the your arraylist
const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(songs);
}

const PlayerScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slider = useRef(null);
  const isPlayerReady = useRef(false);
  const index = useRef(0);
  const progress = useProgress();
  const [songIndex, setSongIndex] = useState(0);
  const [trackTitle, setTrackTitle] = useState()
  const [trackImages, setTrackImages] = useState()
  const [trackMembers, setTrackMembers] = useState()


  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, images, members } = track;
      setTrackImages(images);
      setTrackTitle(title);
      setTrackMembers(members)
    }
  })
  const isItFromUser = useRef(true);
  const position = useRef(Animated.divide(scrollX, width)).current;
  const playbackState = usePlaybackState();

  const skipTo = async (trackId) => {
    await TrackPlayer.skip(trackId)
  }


  useEffect(() => {
    setupPlayer();

    scrollX.addListener(({ value }) => {
      const val = Math.round(value / width);
      setSongIndex(val);
      skipTo(val)
    });

    return () => {
      scrollX.removeAllListeners();
      TrackPlayer.destroy();

      // exitPlayer();
    };
  }, [scrollX]);

  // change the song when index changes
  useEffect(() => {
    if (isPlayerReady.current && isItFromUser.current) {
      TrackPlayer.skip(songs[songIndex].id)
        .then(_ => {
          console.log('changed track');
        })
        .catch(e => console.log('error in changing track ', e));
    }
    index.current = songIndex;
  }, [songIndex]);

  const goNext = async () => {
    slider.current.scrollToOffset({
      offset: (index.current + 1) * width,
    });

    await TrackPlayer.play();
  };
  const goPrv = async () => {
    slider.current.scrollToOffset({
      offset: (index.current - 1) * width,
    });

    await TrackPlayer.play();
  };

  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
        style={{
          alignItems: 'center',
          width: width,
          transform: [
            {
              translateX: Animated.multiply(
                Animated.add(position, -index),
                -100,
              ),
            },
          ],
        }}>
        <Animated.Image
          source={trackImages}
          resizeMode='stretch'
          style={{ width: 320, height: 364, borderRadius: 24 }}
        />
      </Animated.View>
    );
  };

  const TrackCurrentLength = (progress.duration - progress.position)
  console.log(TrackCurrentLength)

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/headset.png')}
          resizeMode='contain'
          style={styles.headsetIcon} />
        <Text style={styles.playingNow}>Tocando agora</Text>
      </View>
      <SafeAreaView style={{height: 364}}>
        <Animated.FlatList
          ref={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={songs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true },
          )}
        />
      </SafeAreaView>
      <View>
        <Text style={styles.title}>{trackTitle}</Text>
        <Text style={styles.artist}>{trackMembers}</Text>
      </View>
      <SliderComp
        currentPosition={progress.position}
        trackLength={progress.duration}
        onSlidingStart={0}
        onSeek={async (value) => {
          await TrackPlayer.seekTo(value)
        }} />

      <Controller onNext={goNext} onPrv={goPrv} />
    </SafeAreaView>
  );
}

export default PlayerScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    width: 330,
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#ffffff',
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: height,
    maxHeight: 1200,
  },
  headsetIcon: {
    width: 30,
    height: 30,
  },
  playingNow: {
    fontSize: 16,
    color: 'white',
    marginLeft: 18.67,
    marginTop: 3,
  },
});
