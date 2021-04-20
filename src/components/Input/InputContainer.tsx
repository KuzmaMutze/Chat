import React from "react";
import { Input } from "./Input/Input";

type MapStateToPropsType = {
  sendMessage: () => void
}
type MapDispatchToPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class InputContainer extends React.Component<PropsType> {
  render() {
    return(
      <>
        <Input sendMessage={this.props.sendMessage}></Input>
      </>
    )
  }
}

export default InputContainer;