import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import initialState from "./store";
import reducers from "./reducers";

export default function RoomProvider({children}) {
    const store = legacy_createStore(reducers, initialState)
    return(
        <Provider store={store}>{children}</Provider>
    )
}