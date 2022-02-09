import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import TrackPlayer from 'react-native-track-player';

const DataAssistent = ({ item, onPress }) => {
  return (
    <View>
      <View style={styles.container}>
          <TouchableOpacity onPress={onPress} style={styles.playIconList}>
            <Icon name="play" size={20} color='green' />
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default DataAssistent;
