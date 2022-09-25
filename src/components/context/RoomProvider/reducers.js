export default function reducers(state, action) {
    switch (action.type) {
        case "ROOM_NAME":
            const {title} = action.payload
            return {currentRoom:title} 
    
        default:
            return state;
    }
}