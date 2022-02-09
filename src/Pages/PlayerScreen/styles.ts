import { Dimensions, StyleSheet } from "react-native";
import { Theme } from "../../../Themes/colors";

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    width: 350,
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: Theme.color.whiteOpacity,
  },
  artist: {
    fontSize: 12,
    textAlign: 'center',
    color: Theme.color.whiteOpacity,
    textTransform: 'capitalize',
    marginTop: 10
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: height,
    maxHeight: 1000,
    backgroundColor: Theme.color.black
  },
  headsetIcon: {
    width: 30,
    height: 30,
    opacity: 0.7
  },
  playingNow: {
    fontSize: 16,
    color: Theme.color.whiteOpacity,
    marginLeft: 18.67,
    marginTop: 5,
  },
});
