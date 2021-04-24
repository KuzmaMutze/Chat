import React, { useState } from "react"
import "./Login.scss";

type PropsType = {
  firebase: any
}
export const Login: React.FC<PropsType> = (props) => {
  const auth = props.firebase.auth()

  // const signInWithEmailAndPassword = (email, password) => {
  //   props.firebase.auth().createUserWithEmailAndPassword(email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     var user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ..
  //   });
  // }

  const signInWithGoogle = () => {
    const provider = new props.firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="login">
      <div className="title">Sign in</div>
      <input className="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text"/>
      <input className="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="text"/>
      <button className="btnCreate">Create New Account</button>
      <button className="btnGoogle" onClick={() => signInWithGoogle()}>Google Authorization</button>
    </div>
  )
};

