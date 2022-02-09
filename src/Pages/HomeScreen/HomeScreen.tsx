import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Theme } from '../../../Themes/colors';
import DataAssistent from '../../Components/dataAssistent';
import DataAssistentReleases from '../../Components/dataAssistentReleases';
import songs from '../../Components/podcastsDB/data';
import SearchBar from '../../Components/searchBar/searchBar';
import { styles } from './styles';

const newSongs = [...songs];
const newSongsReleases = [...songs];
newSongs.sort((a, b) => (a.id > b.id) ? 1 : (b.id > a.id) ? -1 : 0);
newSongsReleases.sort((a, b) => (a.id < b.id) ? 1 : (b.id < a.id) ? -1 : 0);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [trackPods, setTrackPods] = useState(newSongs);
  const [searchTrack, setSearchTrack] = useState('');

  useEffect(() => {
    if (searchTrack === '') {
      setTrackPods(newSongs)
    } else {
      setTrackPods(
        newSongs.filter((item) => {
          if (item.subtitle.indexOf(searchTrack) > -1) {
            return true;
          } else if (item.date.indexOf(searchTrack) > -1) {
            return true;
          } else if (item.members.indexOf(searchTrack) > -1) {
            return true;
          } else {
            return false;
          }
        })
      )
    }
  }, [searchTrack])

  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', marginLeft: 5, }}>
        <Image
          source={item.images}
          resizeMode="contain"
          style={styles.images}
        />
        <DataAssistent onPress={() => navigation.navigate('PlayerScreen')} item={item} />
      </View>
    )
  }
  const renderItemLastReleases = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 5}}>
        <ImageBackground
          source={item.images}
          resizeMode="contain"
          style={styles.imageReleases}
        >
          <DataAssistentReleases onPress={() => {}} item={item} />
        </ImageBackground>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <LinearGradient colors={[Theme.color.background, Theme.color.black]} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('PlayerScreen')}>
          <Image
            source={require('../../../assets/headsetHome.png')}
            resizeMode='contain'
            style={styles.headset}
          />
        </TouchableOpacity>
        <View style={styles.textHeader}>
          <Text style={styles.podcastTitle}>Podcast Valley</Text>
        </View>
        <View>
          <SearchBar
            value={searchTrack}
            onClear={() => { }}
            onChangeText={(text) => setSearchTrack(text)}
          />
        </View>
      </LinearGradient>
      <View>
        <View style={styles.borderCut}>
          <Text style={styles.lastReleases}>Ultimos Laçamentos</Text>
        </View>
        <FlatList
          horizontal={true}
          data={newSongsReleases}
          renderItem={renderItemLastReleases}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.borderCut}>
        <Text style={styles.lastReleases}>Todos Episódios</Text>
        <Text style={styles.podcastSubTitle}>{'Podcasts'}</Text>
      </View>
      <FlatList
        data={trackPods}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
