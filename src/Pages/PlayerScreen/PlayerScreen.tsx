import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import TrackPlayer, {
  Capability,
  Event, 
  useProgress,
  useTrackPlayerEvents
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Theme } from '../../../Themes/colors';
import Controller from '../../Components/controllers/Controller';
import songs from "../../Components/podcastsDB/data";
import SliderComp from '../../Components/slider/SliderComp';
import { styles } from "./styles";

const { width } = Dimensions.get('window');

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.updateOptions({
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.PlayFromId,
    ]
  })
  await TrackPlayer.add(songs);
}

const PlayerScreen = () => {
  const navigation = useNavigation();
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
  //const playbackState = usePlaybackState();

  const skipTo = async (trackId: number) => {
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

  const renderItem = ({ index }: any) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Image
          source={require('../../../assets/headset.png')}
          resizeMode='contain'
          style={styles.headsetIcon} />
        <Text style={styles.playingNow}>Tocando agora</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginLeft: 90 }}>
          <Icon
            name='chevron-double-down'
            size={30}
            color={Theme.color.whiteOpacity}
          />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{ height: 364 }}>
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
      <Controller onNext={goNext} onPrv={goPrv} title={''} />
    </SafeAreaView>
  );
}

export default PlayerScreen;