import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fontSizes";

export default StyleSheet.create({
    container:{
        position:"absolute",
        borderWidth:0.5,
        borderRadius:50,
        backgroundColor:colors.fontColor,
        right:20,
        bottom:20,
        width:60,
        height:60,
        justifyContent:"center",
        alignItems:"center"
    },
    icon:{
        fontSize:40,
        color:colors.blue
    }
})