import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsYqVKkpBD7Nh0Hba9BcTNS1_VJd_VDhI',
  authDomain: 'house-marketplace-app-32345.firebaseapp.com',
  projectId: 'house-marketplace-app-32345',
  storageBucket: 'house-marketplace-app-32345.appspot.com',
  messagingSenderId: '304991603581',
  appId: '1:304991603581:web:052d1c7d1bb28585ca9a14',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
