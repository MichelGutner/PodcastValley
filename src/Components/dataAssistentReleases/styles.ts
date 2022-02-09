import { StyleSheet } from "react-native";
import { Theme } from "../../../Themes/colors";

export const styles = StyleSheet.create({
    container:{
        width: 100,
        flexDirection: 'row', 
        marginTop: 7,
        height: 68,
    },
    playIconList:{
        position: 'absolute',
        top: 40, 
        left: 100,
        borderWidth: 0.25,
        borderColor: Theme.color.white,
        borderRadius: 3,
        backgroundColor: Theme.color.white
    }
})