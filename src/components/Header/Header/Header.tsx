import React from "react"
import "./Header.scss"

type PropsType = {
  auth: any
}

export const Header: React.FC<PropsType> = (props) => {

  return props.auth.currentUser && (
    <div className="header__wrapper">
      <span>Chat</span>
      <button onClick={() => props.auth.signOut()}>Sign out</button>
    </div>
  )
};

