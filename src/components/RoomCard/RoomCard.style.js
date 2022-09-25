import { StyleSheet, Dimensions } from "react-native";
import fonts from "../styles/fontSizes";
const dimension = Dimensions.get("window")
export default StyleSheet.create({
    container:{
        borderWidth:0.5,
        borderRadius:10,
        marginTop:10,
        // marginRight:10,
        marginLeft:10,
        height:dimension.height/3,
        width:dimension.width/2.2,
        justifyContent:"center",
        backgroundColor:"white"
    },
    roomText:{
        padding:10,
        textAlign:"center",
        fontSize:fonts.NormalFont,
    }
})