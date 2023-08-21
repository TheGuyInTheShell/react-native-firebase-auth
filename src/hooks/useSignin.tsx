import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { TResponseCredentials, authProps } from '../types/auth.types';


export default function useSignIn(){
    const auth = getAuth();
    
    const [response, setResponse] = React.useState<TResponseCredentials>({
        credentials: null,
        error: null
    })
    
    const callSign = ({ email, password }: authProps)=>{
      try {
        signInWithEmailAndPassword(auth, email, password).then(credentials =>{
            setResponse({
                ...response,
                credentials
            })
        });
      } catch (error) {
        setResponse({
            ...response,
            error
        });
      }
    }

      return {
        response,
        callSign
      }
}