import { StyleSheet } from "react-native";
import colors from "../../../components/styles/colors";
import fonts from "../../../components/styles/fontSizes";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.blueLight,
        flex:1
    },
    text:{
        fontSize:fonts.BigFont,
        textAlign:"center",
        color:colors.fontColor,
        marginTop:40,
        marginBottom:40,
        fontWeight:"bold"
    }
})