import React from "react";
import { View, TextInput } from "react-native";
import styles from "./Input.style"
export default function Input({placeholder, value, onType, isSecure}) {
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder={placeholder}
                value={value}
                onChangeText={onType}
                secureTextEntry={isSecure}
                autoCapitalize="none"
            />
        </View>
    )
}