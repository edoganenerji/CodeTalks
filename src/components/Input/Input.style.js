import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fontSizes";

export default StyleSheet.create({
    container:{
        marginLeft:10,
        marginRight:10,
        padding:5,
    },
    textInput:{
        color:colors.blueDark,
        borderRadius:10,
        borderWidth:0.5,
        padding:10,
        backgroundColor:colors.fontColor,
    }
})