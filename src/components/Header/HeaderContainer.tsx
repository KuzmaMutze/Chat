import React from "react";
import { Header } from "./Header/Header";

type MapStateToPropsType = {}
type MapDispatchToPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return(
      <>
        <Header></Header>
      </>
    )
  }
}

export default HeaderContainer;