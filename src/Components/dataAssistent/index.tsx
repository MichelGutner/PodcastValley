import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from './styles';

const DataAssistent = ({ item, onPress }) => {
  const {subtitle, members, date, duration } = item;
  const durationFixed = secs => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={{marginLeft: 5}}>
          <Text style={styles.subTitle}>{subtitle}</Text>
          <Text style={styles.members}>{members}</Text>
          <Text style={styles.date}>{date} | Duração: {durationFixed(duration)}</Text>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.playIconList}>
          <Icon name="play" size={20} color='green'/>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default DataAssistent;
