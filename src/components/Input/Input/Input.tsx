import React, { useRef } from "react"
import "./Input.scss"

type PropsType = {
  sendMessage: () => void
}
export const Input: React.FC<PropsType> = (props) => {

  return (
    <div className="input__wrapper">
      <input className="input__input" placeholder="Message"></input>
      <button  onClick={() => props.sendMessage()} className="input__btn"></button>
    </div>
  )
};

