import React, { RefObject } from "react";
import { Chat } from "./Chat/Chat";

type MapStateToPropsType = {
  messagesDiv: RefObject<HTMLDivElement>
}
type MapDispatchToPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class ChatContainer extends React.Component<PropsType> {

  render() {
    return(
      <>
        <Chat messagesDiv={this.props.messagesDiv}></Chat>
      </>
    )
  }
}

export default ChatContainer;