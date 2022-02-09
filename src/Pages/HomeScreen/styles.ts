import { StyleSheet } from "react-native";
import { Theme } from "../../../Themes/colors";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.color.black
    },
    header: {
        flexDirection: 'row',
        height: 96,
        backgroundColor: Theme.color.white,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    podcastTitle: {
        fontSize: 20,
        color: Theme.color.white,
        opacity: 0.8
    },
    headset: {
        width: 40,
        height: 40,
        marginTop: 35,
        marginRight: 20,
    },
    textHeader: {
        marginTop: 40,
    },
    lastReleases: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'lexend',
        marginLeft: 10,
        color: Theme.color.white,
        opacity: 0.8,
        marginBottom: 5
    },
    images: {
        width: 119,
        height: 80,
    },
    imageReleases: {
        width: 220,
        height: 120,
    },
    podcastSubTitle: {
        marginLeft: 20,
        color: Theme.color.white,
        opacity: 0.8
    },
    borderCut: {
        borderBottomWidth: 0.25, 
        borderColor: Theme.color.white
    }

})