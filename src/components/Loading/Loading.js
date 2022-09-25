import React from "react";
import Lottie from "lottie-react-native";

export default function Loading() {
    return(
        <Lottie source={require("../../assets/loading.json")} autoPlay style={{height:35, width:35, alignSelf:"center"}} />
    )
}