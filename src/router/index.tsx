import { useAuth } from "../hooks/useAuth";
import AuthStack from "./AuthStack"
import AppStack from "./AppStack";

export default function RootNavigation() {
    const { user } = useAuth();
  
    return user ? <AppStack /> : <AuthStack />;
  }