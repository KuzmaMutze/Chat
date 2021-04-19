import React from "react"
import "./Message.scss";

type PropsType = {
  message: string
  avatar: string
}
export const Message: React.FC<PropsType> = (props) => {
  
  return (
    <div className="message__wrapper">
      <img src={props.avatar} alt=""/> <span>{props.message}</span>
    </div>
  )
};

