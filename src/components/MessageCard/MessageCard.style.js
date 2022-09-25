import { StyleSheet } from "react-native";
import colors from "../styles/colors";

export default StyleSheet.create({
    container:{
        marginLeft:6,
        marginRight:6,
        marginTop:6,
        padding:5,
        borderWidth:0.5,
        borderRadius:10,
        backgroundColor:colors.blueLight,
        flexDirection:"column",
        flex:1
    },
    infoContainer:{
        flexDirection:"row"
    },
    seperator:{
        borderWidth:0.5,
        margin:5,
        borderColor:colors.fontColor
    },
    contentText: {
        color:colors.fontColor,
        fontSize:16
    },
    user: {
        color:colors.fontColor,
        fontSize:14,
        flex:1
    },
    dateText: {
        color:colors.fontColor,
        fontSize:14,
        textAlign:"right"
    },
})