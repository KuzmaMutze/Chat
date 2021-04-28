import React, { useState } from "react"
import "./Login.scss";

type PropsType = {
  firebase: any
}
export const Login: React.FC<PropsType> = (props) => {
  
  const auth = props.firebase.auth()

  const signInWithGoogle = () => {
    const provider = new props.firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
    
  //Create User with Email and Password
  const signUpWithEmailAndPassword = (email: string, password: string) => {
    props.firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error: any) {
      setCrtAcc(true)
      let errorMessage = error.message;
      alert(errorMessage);
    });
  }

  //Sign In User with Email and Password
  const signInWithEmailAndPassword = (email: string, password: string) => {
    props.firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error: any) {
      let errorMessage = error.message;
      alert(errorMessage);
    });
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [crtAcc, setCrtAcc] = useState(false)

  return (
    <div className="login">
      {!crtAcc ? <div className="title">Sign in</div> : <div className="title">Sign Up</div>}
      <input className="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text"/>
      <input className="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="text"/>
      {!crtAcc ? <div style={{width: "100%"}}>
        <button className="btnSignIn" onClick={() => signInWithEmailAndPassword(email, password)}>Sign In</button>
        <button className="btnGoogle" onClick={() => signInWithGoogle()}>Google Authorization</button>
        <div style={{marginTop: "25px", textAlign: "center"}}>
          You don't have an account?
          <button style={{marginTop: "20px"}} className="btnCreate" onClick={() => setCrtAcc(true)}>Sign Up</button>
        </div>
      </div> 
      :
      <div>
        <button className="btnCreate" onClick={() => signUpWithEmailAndPassword(email, password)}>Create New Account</button>
        <div style={{marginTop: "25px", textAlign: "center"}} >
          Do you have an account?
          <button className="btnSignIn" onClick={() => setCrtAcc(false)}>Sign In</button>
        </div>
      </div>}
    </div>
  )
};

