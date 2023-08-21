import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import Background from '../components/Background'
import { getAuth, signOut } from 'firebase/auth'

export default function StartScreen() {
  const auth = getAuth()
  const [isLoading, setIsLoading] = React.useState(false)

  return (
        <Background>
            <View style={style.container}>
                <Text style={style.tittle} >Welcome</Text>
                <Button
                  mode='elevated'
                  loading={isLoading}
                  onPress={async ()=> {
                    setIsLoading(true)
                    signOut(auth).then(()=>{
                      setIsLoading(false)
                    })
                  }}
                  >
                  Sign out
                </Button>
            </View>
        </Background>
  )
}


const style = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
      },
      tittle: {
        color: "white",
        fontSize: 20
      },
})