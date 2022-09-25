import React from "react";
import { View, FlatList } from "react-native";
import RoomCard from "../../components/RoomCard";
import styles from "./Rooms.style";
import database from "@react-native-firebase/database";
import FloatingButton from "../../components/FloatingButton";
import ContentInputModal from "../../components/modal/ContentInputModal";
import parseContentData from "../../Utils/parseContentData";
import { useDispatch, useSelector } from "react-redux";
export default function Rooms({navigation}) {
    const [inputVisibility, setInputVisibility] = React.useState(false)
    const [roomList, setRoomList] = React.useState([])

    React.useEffect(() => {
        database().ref('rooms/').on("value", snapshot => {
            const contentList = snapshot.val()
            const parsedList = parseContentData(contentList || {})
            setRoomList(parsedList)
        })
    }, [])
    const handleInputToggle = () => {
        setInputVisibility(!inputVisibility)
    }
    const handleCreateRoom = (content) => {
        handleInputToggle()
        const contentObject = {
            title: content,
            date: new Date().toISOString(),
        }
        database().ref(`rooms/${content}`).push(contentObject)
    }
    const dispatch = useDispatch()
    const handleEnterRoom = (title) => {
        dispatch({type:"ROOM_NAME", payload:{title}})
        navigation.navigate("MessagePage",{title})
    }
    const renderRooms = ({ item }) => {
        return <RoomCard roomName={item.title} onPress={()=>handleEnterRoom(item.title)} />
    
    } 
        


    return (
        <View style={styles.container} >
            <FlatList
                numColumns={2}
                style={styles.room_container}
                data={roomList}
                renderItem={renderRooms}
            />
            <FloatingButton icon={"plus"} onPress={handleInputToggle} />
            <ContentInputModal visible={inputVisibility} onClose={handleInputToggle} onCreateGroup={handleCreateRoom} />
        </View>
    )
}