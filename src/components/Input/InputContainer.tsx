import React from "react";
import { Input } from "./Input/Input";

type MapStateToPropsType = {}
type MapDispatchToPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class InputContainer extends React.Component<PropsType> {
  render() {
    return(
      <>
        <Input></Input>
      </>
    )
  }
}

export default InputContainer;