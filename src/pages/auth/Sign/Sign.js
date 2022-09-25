import React from "react";
import { View, Text } from "react-native";
import Input from "../../../components/Input";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";
import authMessageErrorParser from "../../../Utils/authMessageErrorParser";
import { showMessage } from "react-native-flash-message";
import Button from "../../../components/Button";
import styles from "./Sign.style"

export default function Sign({ navigation }) {
    const [loading, setLoading] = React.useState(false)
    const initialFormValues = {
        usermail: '',
        password: '',
        repassword: ''
    }
    async function handleFormSubmit(FormValues) {
        if (FormValues.password !== FormValues.repassword) {
            showMessage({
                message: "Şifreler eşleşmedi!",
                type: "danger"
            })
        }
        try {
            setLoading(true)
            await auth().createUserWithEmailAndPassword(FormValues.usermail, FormValues.password)
            navigation.navigate("LoginPage")
            showMessage({
                message:"Kayıt başarılı",
                type:"success"
            })
            setLoading(false)
        } catch (error) {

            setLoading(false)
        }
    }
    const handleBack = () => {
        navigation.navigate("LoginPage")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lets Get Together</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            placeholder="Kullanıcı adınızı giriniz.."
                            value={values.usermail}
                            onType={handleChange('usermail')}
                        />
                        <Input
                            placeholder="Şifrenizi giriniz.."
                            value={values.password}
                            onType={handleChange('password')}
                            isSecure
                        />
                        <Input
                            placeholder="Şifrenizi tekrar giriniz.."
                            value={values.repassword}
                            onType={handleChange('repassword')}
                            isSecure
                        />
                        <Button
                            text={"Kayıt Ol"}
                            loading={loading}
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
            <Button
                text={"Geri"}
                loading={loading}
                onPress={handleBack}
                theme="secondary"
            />
        </View>
    )
}