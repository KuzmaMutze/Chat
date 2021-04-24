import React from 'react';
import './App.scss';

import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth'
import { Login } from './components/Login/Login/Login';
import { Header } from './components/Header/Header/Header';
import { Chat } from './components/Chat/Chat/Chat';
import { Preloader } from './components/common/Preloader';

firebase.initializeApp({
  apiKey: "AIzaSyDJWcxWzMuBAVQYxnvS7Hfa3OUv9x1y0d8",
  authDomain: "fasfsf-a445d.firebaseapp.com",
  projectId: "fasfsf-a445d",
  storageBucket: "fasfsf-a445d.appspot.com",
  messagingSenderId: "1084450180449",
  appId: "1:1084450180449:web:c31b029cfd4bea0af48920",
  measurementId: "G-P9TV46LPYN"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {

  const [user] = useAuthState(auth)
  // todo set preloader
  return (
    <div className="app">
      {user ? <div className="app__wrapper">
              <Header 
                auth={auth}
                />
              <Chat 
                auth={auth}
                firebase={firebase}
                firestore={firestore} 
                />
        </div> : <Login 
                  firebase={firebase}
                    />}
    </div>
  );
}

export default App;
