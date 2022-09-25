import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./FloatingButton.style";
export default function FloatingButton({icon, onPress}) {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon style={styles.icon} name={icon} />
        </TouchableOpacity>
    )
}