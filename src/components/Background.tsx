import React, {ReactNode} from "react";
import { StyleSheet, ImageBackground, View  } from "react-native";
import { theme } from "../core/theme";


type props = {
    children?: ReactNode
}

export default function Background({ children }: props ) {

    return (
            <ImageBackground
            source={require('../../assets/background.jpg')}
            resizeMode="cover"
            style={styles.background}
            >
            <View style={styles.container} >
                {children}
            </View>
            
            </ImageBackground>
    )
    
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.surface,
      gap: 10,
      zIndex: 0,
      position: 'absolute',
    },
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })