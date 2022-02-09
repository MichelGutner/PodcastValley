import Slider from '@react-native-community/slider';
import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';
import { Theme } from '../../../Themes/colors';

type Props = {
  trackLength: any;
  currentPosition: any;
  onSeek: any;
  onSlidingStart: any;
}

const ProgressBar = ({
  trackLength,
  currentPosition,
  onSeek,
  onSlidingStart,
}: Props) => {
  const formatTime = secs => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[styles.text, { color: Theme.color.whiteOpacity }]}>
          {formatTime(currentPosition)}
        </Text>
        <Text style={[styles.text, { width: 190, color: Theme.color.whiteOpacity }]}>
          {formatTime(trackLength)}
        </Text>
      </View>
      <Slider
        maximumTrackTintColor='white'
        maximumValue={Math.max(trackLength, 1, currentPosition)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  slider: {
    marginTop: -12,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    color: Theme.color.white,
    fontSize: 12,
    textAlign: 'right',
  }
});