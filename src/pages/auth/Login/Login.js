import React from "react";
import { View, Text } from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";
import {showMessage} from "react-native-flash-message"
import styles from "./Login.style"
import authMessageErrorParser from "../../../Utils/authMessageErrorParser";

export default function Login({navigation}) {
    const [loading, setLoading] = React.useState(false)
    const initialFormValues = {
        usermail: '',
        password: ''
    }
    async function handleFormSubmit(FormValues) {
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(FormValues.usermail, FormValues.password)
            navigation.navigate("RoomsPage")
            setLoading(false)
        } catch (err) {
            showMessage({
                message:authMessageErrorParser(err.code),
                type:'danger'
            }
            )
            setLoading(false)
        }
    }
    const handleSignUp = () => {
        navigation.navigate("SignPage")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lets Get Together</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            value={values.usermail}
                            onType={handleChange('usermail')}
                            placeholder="Kullanıcı adınızı giriniz.."
                            />
                        <Input
                            value={values.password}
                            onType={handleChange('password')}
                            placeholder="Şifrenizi giriniz.."
                            isSecure
                            />
                        <Button
                            text="Giriş"
                            onPress={handleSubmit}
                            loading={loading}
                        />
                    </>
                )}
            </Formik>
            <Button
                text="Kayıt Ol"
                theme="secondary"
                onPress={handleSignUp}
            />
        </View>
    )
}