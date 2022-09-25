import React from "react";
import App from "./App";
import RoomProvider from "./components/context/RoomProvider";
export default function Wrapper(){
    return(
        <RoomProvider>
            <App />
        </RoomProvider>
    )
}