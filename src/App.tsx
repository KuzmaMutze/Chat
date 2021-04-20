import React, { MutableRefObject, RefObject, useEffect, useRef } from 'react';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import InputContainer from './components/Input/InputContainer';
import ChatContainer from './components/Chat/ChatContainer';

function App() {
  
  const messagesDiv: MutableRefObject<HTMLDivElement | null> = useRef(null)

  useEffect(() => {
    messagesDiv.current!.scrollIntoView({behavior: "smooth"})
  }, [])

  const sendMessage = () => {
    
    messagesDiv.current!.scrollIntoView({behavior: "smooth"})
  }
  

  return (
	<div className="app">
		<div className="app__wrapper">
            <HeaderContainer></HeaderContainer>
            <ChatContainer messagesDiv={messagesDiv}></ChatContainer>
            <InputContainer sendMessage={sendMessage}></InputContainer>
	  	</div>
	</div>
  );
}

export default App;
