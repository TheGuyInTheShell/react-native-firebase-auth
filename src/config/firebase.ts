import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import credentials from './credentials'

const app = initializeApp(credentials)

export default app