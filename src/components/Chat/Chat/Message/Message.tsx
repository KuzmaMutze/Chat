import React from "react"
import "./Message.scss";

type PropsType = {
  message: any
  auth: any
}
export const Message: React.FC<PropsType> = (props) => {

  const messageClass = props.message.uid === props.auth.currentUser.uid ? 'sent' : 'received';
  
  return (
    <div className={`message__wrapper ${messageClass}`}>
      <img src={props.message.photoURL} alt="avatar"/> <span>{props.message.text}</span>
    </div>
  )
};

