import React, { MutableRefObject, useEffect, useRef, useState } from "react"
import "./Chat.scss"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Message } from "./Message/Message"
import { Preloader } from "../common/Preloader";

type PropsType = {
  firestore: any
  auth: any
  firebase: any
}


export const Chat: React.FC<PropsType> = (props) => {

  const messagesDiv: MutableRefObject<HTMLDivElement | null> = useRef(null)
  
  const sendMessage = async(e: any) => {

    e.preventDefault()
    const { uid, photoURL } = props.auth.currentUser

    await messagesRef.add({
      text: formValue,
      createdAt: props.firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue("")
    messagesDiv.current!.scrollIntoView({behavior: "smooth"})
  }
  
  const messagesRef = props.firestore.collection('messages')  
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { idField: 'id' });

  useEffect(() => {
    messagesDiv.current!.scrollIntoView({behavior: "smooth"})
  }, [messages])
  
  const [formValue, setFormValue] = useState('');


  return (
    <>
    <div className="chat__wrapper">
      {messages ? messages.map(message => <Message auth={props.auth} message={message}/>) : <Preloader></Preloader>}
      <div ref={messagesDiv}></div>
    </div>

    <form onSubmit={sendMessage} className="input__wrapper">
      <input placeholder="Message" value={formValue} onChange={(e) => setFormValue(e.target.value)} className="input__input"></input>
      <button disabled={!formValue} type="submit" className="input__btn"></button>
    </form>
    </>
  )
};