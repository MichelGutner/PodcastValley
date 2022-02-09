import { StyleSheet } from "react-native";
import { Theme } from "../../../Themes/colors";



export const styles = StyleSheet.create({
    container: {
        width: 240,
        flexDirection: 'row',
        marginTop: 7,
        height: 68,
        borderBottomWidth: 0.25,
        borderColor: Theme.color.transparent,

    },
    playIconList: {
        position: 'absolute',
        left: 200,
        top: 25,
        borderWidth: 0.25,
        borderColor: Theme.color.white,
        borderRadius: 3
    },
    subTitle: {
        fontSize: 12,
        maxWidth: 230,
        maxHeight: 18,
        color: Theme.color.white,
        opacity: 0.8
    },
    members: {
        maxWidth: 140,
        fontSize: 10,
        color: Theme.color.white,
        opacity: 0.8
    },
    date:{
        fontSize: 9,
        color: Theme.color.white,
        opacity: 0.8
    }

})