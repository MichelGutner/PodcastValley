import Slider from '@react-native-community/slider';
import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';

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
        <Text style={[styles.text, { color: 'white' }]}>
          {formatTime(currentPosition)}
        </Text>

        <View style={{ flex: 1 }} />

        <Text style={[styles.text, { width: 120, color: 'white' }]}>
          {formatTime(trackLength)}
        </Text>
      </View>
      <Slider
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
    color: 'rgba(255, 255, 255, 0.62)',
    fontSize: 12,
    textAlign: 'right',
  }
});