import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, RegisterScreen } from "../app";

const Stack = createStackNavigator()

export default function AuthStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true
                }}
            >
                <Stack.Screen name="Sign in" component={LoginScreen} />
                <Stack.Screen name="Sign up" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}