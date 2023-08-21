import React from "react"
import { Text, StyleSheet, View } from 'react-native';
import { Button } from "react-native-paper";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types/router.types";
import {TextInput as Input} from "react-native-paper"
import TextInput from "../components/TextInput"
import { useFormik } from 'formik';
import Layout from '../layouts/LayoutAuth'
import * as Yup from 'yup'
import useSignIn from "../hooks/useSignin";
import { theme } from "../core/theme";

export default function LoginScreen({ navigation }: StackScreenProps<RootStackParamList, 'Sign in'>) {
    
    const [hiddenPassword, setHiddenPassword] = React.useState(true)

    const {callSign} = useSignIn()


    const {values, errors, setFieldValue, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                        .email('No valid email')
                        .required('The email is required'),
            password: Yup.string()
                        .required('The password is required')
        }),
        onSubmit: callSign
    })

    return (     
            <Layout>
                <TextInput
                    mode="outlined"
                    errorText={errors.email}
                    description="Writte your email"
                    onChangeText={(value: string) => setFieldValue('email', value)}
                    value={values.email}
                    />
                <TextInput
                    mode="outlined"
                    secureTextEntry={hiddenPassword}
                    right={<Input.Icon icon="eye" onPress={()=> setHiddenPassword(!hiddenPassword)} />}
                    errorText={errors.password}
                    description="Writte your password"
                    onChangeText={(value: string) => setFieldValue('password', value)}
                    value={values.password}
                    />
                <Button mode="contained" onPress={ ()=>  handleSubmit() }>
                    Sign in
                </Button>
                <View style={style.linkContainer}>
                    <Text
                        style={style.linkTo}
                    >
                    Don't have an account?{" "}
                    <Text
                        style={style.link}
                        onPress={() => navigation.navigate("Sign up")}
                    >
                        Sign Up
                    </Text>
                    </Text>
                </View>
            </Layout>
      );
}

const style = StyleSheet.create({
    linkContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15,
    },
    linkTo: {
        color: 'black'
    },
    link: {
        color: theme.colors.primary
    }
})