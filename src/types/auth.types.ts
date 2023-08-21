import { UserCredential } from "firebase/auth"

export type authProps = {
    email: string,
    password: string,
    confirmPassword?: string
}

export interface TResponseCredentials {
    credentials: UserCredential | null
    error: any
}
