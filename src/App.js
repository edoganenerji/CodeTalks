import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import Login from "./pages/auth/Login";
import Sign from "./pages/auth/Sign";
import colors from "./components/styles/colors";
import fonts from "./components/styles/fontSizes";
import Rooms from "./pages/Rooms";
import Messages from "./pages/Messages";
import auth from "@react-native-firebase/auth"
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
const Stack = createNativeStackNavigator()
export default function App() {
  const [userSession, setUserSession] = React.useState();
  React.useEffect(() => {
    auth().onAuthStateChanged(user => setUserSession(!!user))
  }, [])
  const currentRoomName = useSelector(state => state.currentRoom)
  const Auth = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !userSession ? (
            <Stack.Group>
              <Stack.Screen options={{ title: "CodeTalks", headerTintColor: colors.fontColor, headerStyle: { backgroundColor: colors.blueDark, }, headerTitleStyle: { fontWeight: "bold", fontSize: fonts.BigFont }, headerTitleAlign: "center" }} name="AuthPage" component={Auth} />
            </Stack.Group>
          ) :
            (
              <Stack.Group>
                <Stack.Screen name="RoomsPage" component={Rooms}
                  options={{ title: "CodeTalks", headerTintColor: colors.fontColor, headerStyle: { backgroundColor: colors.blueDark }, headerTitleAlign: "center", headerRight: () => <Icon name="logout" size={30} color={colors.fontColor} onPress={() => auth().signOut()} /> }} />
                <Stack.Screen name="MessagePage" component={Messages}
                  options={{ title: currentRoomName, headerTintColor: colors.fontColor, headerStyle: { backgroundColor: colors.blueDark }, headerTitleAlign: "center" }} />
              </Stack.Group>
            )
        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}