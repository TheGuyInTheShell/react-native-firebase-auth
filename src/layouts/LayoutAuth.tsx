import { ReactNode } from 'react'
import Background from '../components/Background';
import { View, StyleSheet } from 'react-native';

type props = {
  children: ReactNode
}

export default function Layout({ children }: props ) {
  
  return (
        <>
          <View style={style.containerRounded}>
            <View style={style.container}>
              {children}
            </View>
          </View>
          <Background />
        </>
  );
}


const style = StyleSheet.create({
    containerRounded: {
       backgroundColor: '#ffffff',
       height: 'auto',
       width: '100%',
       position: 'absolute',
       borderBottomEndRadius: 10,
       borderBottomStartRadius: 10,
       zIndex: 1
    },
    container: {
      flex: 1,
      padding: 15,
      paddingBottom: 20,
      transform: [{translateY: 5}]
    },  
})