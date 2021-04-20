import React, { RefObject, useEffect, useRef } from "react"
import "./Chat.scss"
import { Message } from "./Message/Message"

type PropsType = {
  messagesDiv: RefObject<HTMLDivElement>
}


export const Chat: React.FC<PropsType> = (props) => {

  let messages = [
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "1 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "2 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "3 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "4 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
    {avatar: "https://lh3.googleusercontent.com/a-/AOh14GjCaX9D3xxgzAvPx19gaaTqoWPfeyTa9-PV-JNztA=s96-c", message: "5 Hello everyone"},
  ]


  




  return (
    <div className="chat__wrapper">
      {messages.map(message => <Message avatar={message.avatar} message={message.message}/>)}
      {/* @ts-ignore */}
      <div ref={props.messagesDiv}></div>

    </div>
  )
};