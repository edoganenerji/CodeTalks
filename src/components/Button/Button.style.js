import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fontSizes";
const baseStyle = StyleSheet.create({
    container:{
        borderWidth:0.5,
        borderRadius:10,
        marginTop:10,
        marginLeft:50,
        marginRight:50,
        padding:5
    },
    text:{
        textAlign:"center",
        fontSize:fonts.SmallFont,
        
    }
})
export default {
    primary: StyleSheet.create({
        ...baseStyle,
        container:{
            ...baseStyle.container,
            backgroundColor:colors.blueDark,
            
        },
        text:{
            ...baseStyle.text,
            color:colors.fontColor,
        }
    }),

    secondary: StyleSheet.create({
        ...baseStyle,
        container:{
            ...baseStyle.container,
            backgroundColor:colors.fontColor
        },
        text:{
            ...baseStyle.text,
            color:colors.blueDark
        }
    })
}