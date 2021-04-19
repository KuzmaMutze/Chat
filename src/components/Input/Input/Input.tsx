import React from "react"
import "./Input.scss"
// @ts-ignore



type PropsType = {}
export const Input: React.FC<PropsType> = (props) => {

  return (
    <div className="input__wrapper">
      <input className="input__input" placeholder="Message"></input>
      <button className="input__btn"></button>
    </div>
  )
};

