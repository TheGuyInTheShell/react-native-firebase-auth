import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../app";

const Stack = createStackNavigator()

export default function AppStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true
                }}
            >
                <Stack.Screen name="Start" component={StartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}