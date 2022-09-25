import React from "react";
import { View, TextInput, Text } from "react-native";
import Modal from "react-native-modal";
import Button from "../../Button";
import styles from "./ContentInputModal.style";
export default function ContentInputModal({visible, onClose, onCreateGroup, placeholder="Yeni grup oluştur", buttonText="Grup Kur"}) {
    const [text, setText] = React.useState(null)
    const handleCreateGroup = () => {
        if(!text){
            return
        }
        onCreateGroup(text)
        setText(null)
    }
    return(
        <Modal isVisible={visible} swipeDirection="down" onBackButtonPress={onClose} onBackdropPress={onClose} onSwipeComplete={onClose} style={styles.modal}>
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                       placeholder={placeholder}
                       onChangeText={setText} 
                       multiline
                    />
                </View>
                <Button text={buttonText} onPress={handleCreateGroup} />
            </View>

        </Modal>
    )
}