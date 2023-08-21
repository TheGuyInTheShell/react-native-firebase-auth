import React from 'react'
import './src/config/firebase'
import RootNavigation from './src/router'
import { Provider } from 'react-native-paper';
import { theme } from './src/core/theme';

export default function App(){
    return (
        <Provider theme={theme}> 
            <RootNavigation />
        </Provider>
    )
} 