import React from 'react';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import InputContainer from './components/Input/InputContainer';
import ChatContainer from './components/Chat/ChatContainer';

function App() {
  return (
	<div className="app">
		<div className="app__wrapper">
            <HeaderContainer></HeaderContainer>
            <ChatContainer></ChatContainer>
            <InputContainer></InputContainer>
	  	</div>
	</div>
  );
}

export default App;
