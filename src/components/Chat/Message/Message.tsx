import React from "react"
import "./Message.scss";

type PropsType = {
  message: any
  auth: any
}
export const Message: React.FC<PropsType> = (props) => {  

  const messageClass = props.message.uid === props.auth.currentUser.uid ? 'sent' : 'received';  
  console.log(props.message);
  
  return (
    <div className={`message__wrapper ${messageClass}`}>
      {props.message.photoURL ? <img src={props.message.photoURL} className="avatar" alt="avatar"/> :
      <div className="avatar without-avatar">
        <p>{props.message.uid[0].toUpperCase()}</p>
      </div>}
      <span>{props.message.text}</span>
    </div>
  )
};

