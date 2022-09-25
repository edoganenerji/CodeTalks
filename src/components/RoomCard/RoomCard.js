import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./RoomCard.style";
export default function RoomCard({roomName, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.roomText}>{roomName}</Text>
        </TouchableOpacity>
    )
}