import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./Messages.style";
import MessageCard from "../../components/MessageCard";
import FloatingButton from "../../components/FloatingButton";
import ContentInputModal from "../../components/modal/ContentInputModal";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
import parseMessageContent from "../../Utils/parseMessageContent";
export default function Messages({route}) {
    const {title:roomName} = route.params
    const [inputVisibility, setInputVisibility] = React.useState(false)
    const [contentList, setContentList] = React.useState([])
    React.useEffect(()=>{
        database().ref(`rooms/${roomName}/codetalks/`).on("value", snapshot=>{
            const contentData = snapshot.val() 
            const parsedContentData = parseMessageContent(contentData || {})
            setContentList(parsedContentData)
        }
        )
    },[])
    const handleInputToggle = () => {
        setInputVisibility(!inputVisibility)
    }
    const handleSendMessage = (content) => {
        handleInputToggle()
        const userName = auth().currentUser.email
        const contentObject = {
            message: content,
            user: userName.split("@")[0],
            date: new Date().toISOString()
        }
        database().ref(`rooms/${roomName}/codetalks/`).push(contentObject)
    }
    const renderContentList = ({item}) => {
        return <MessageCard message={item} />
    }
    return(
        <View style={styles.container}>
            <FlatList
                data={contentList}
                renderItem={renderContentList}
            />
            <ContentInputModal onClose={handleInputToggle} visible={inputVisibility} onCreateGroup={handleSendMessage} 
            placeholder="Sohbet ekle" 
            buttonText="Gönder"/>
            <FloatingButton icon={"plus"} onPress={handleInputToggle}/>
        </View>
    )
}