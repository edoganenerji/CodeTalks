import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";
const dimension = Dimensions.get("window")
export default StyleSheet.create({
    modal:{
        justifyContent:"flex-end"
        
    },
    container:{
        backgroundColor:colors.blueLight,
        height:dimension.height/3,
        margin:10,
        padding:10,
        borderRadius:10
    },
    input_container:{
        backgroundColor:"white",
        flex:1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        padding:10,
    },
})