import React from "react";
import { View, Text } from "react-native";
import styles from "./MessageCard.style";
import { formatDistance, parseISO } from "date-fns";
import { tr } from "date-fns/locale"
export default function MessageCard({ message }) {
    const formattedDate = formatDistance(parseISO(message.date), new Date(), { addSuffix: true, locale: tr })
    return (
        <View style={styles.container}>
            <Text style={styles.contentText} >{message.message}</Text>
            <View style={styles.seperator}/>
            <View style={styles.infoContainer}>
                <Text style={styles.user}>{message.user}</Text>
                <Text style={styles.dateText}>{formattedDate}</Text>
            </View>
        </View>
    )
}