import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import Error from "../Error/Error";
import Loading from "../Loading"
import styles from "./Button.style";
export default function Button({ text, onPress, loading, theme = "primary" }) {
    return (
        <TouchableOpacity
            style={styles[theme].container}
            onPress={onPress}
            disabled={loading}
        >
            {
                loading ? (
                    <Loading />
                ) : (
                    <Text style={styles[theme].text}>{text}</Text>
                    )
                }

            
        </TouchableOpacity>
    )
}