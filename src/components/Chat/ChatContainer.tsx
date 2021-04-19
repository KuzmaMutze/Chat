import React from "react";
import { Chat } from "./Chat/Chat";

type MapStateToPropsType = {}
type MapDispatchToPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class ChatContainer extends React.Component<PropsType> {

  render() {
    return(
      <>
        <Chat></Chat>
      </>
    )
  }
}

export default ChatContainer;