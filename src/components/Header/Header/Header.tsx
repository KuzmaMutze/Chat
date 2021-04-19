import React from "react"
import "./Header.scss"

type PropsType = {}

export const Header: React.FC<PropsType> = (props) => {
  return (
    <div className="header__wrapper">
      <span>⚛️🔥💬</span>
      <button>Sign out</button>
    </div>
  )
};

