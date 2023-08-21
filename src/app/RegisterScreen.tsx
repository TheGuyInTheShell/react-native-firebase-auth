import React from "react"
import { Button, TextInput as Input } from "react-native-paper";
import TextInput from "../components/TextInput"
import { useFormik } from 'formik';
import Layout from "../layouts/LayoutAuth";
import * as Yup from 'yup'
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types/router.types";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Alert } from "react-native";

const auth = getAuth();

export default function RegisterScreen({navigation}: StackScreenProps<RootStackParamList, 'Sign up'>){
      
    const [hiddenPassword, setHiddenPassword] = React.useState(true)

    const {values, errors, setFieldValue, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                        .email('No valid email')
                        .required('The email is required'),
            password: Yup.string()
            .required('Password is required')
            .min(8, 'The password must have more than 8 characters')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Password must contain at least one capital letter')
            .matches(/[0-9]/, 'Password must contain at least one number')
            .matches(
                /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
                'Password must contain at least one special character'
            ),
            confirmPassword: Yup.string()
            .required('Confirm your password')
            .oneOf([Yup.ref('password')], 'Passwords do not match')
        }),
        onSubmit: async (values) => {
            try {
                await createUserWithEmailAndPassword(auth, values.email, values.password);
            } catch (error) {
                Alert.alert(
                    'Error in sign up',
                    `${error}`
                )
            }
        }
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
                  <TextInput
                    mode="outlined"
                    secureTextEntry={true}
                    errorText={errors.confirmPassword}
                    description="Repeat your password"
                    onChangeText={(value: string) => setFieldValue('confirmPassword', value)}
                    value={values.confirmPassword}
                    />
                <Button mode="contained" onPress={ ()=>  handleSubmit() }>
                    Sign up
                </Button>
            </Layout>
      );
}