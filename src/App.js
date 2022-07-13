import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './components/CSS/Style.css';
//import HeaderCompo from './components/Header';
import HomeComponent from './components/Home';
import LoginAction from './components/Login';
import ConditionalRenderView from './components/Conditional Render View';
import MailView from './components/Mailbox';
import InboxComponent from './components/Nested Components/Inbox';
import StarredComponent from './components/Nested Components/Starred';
import TrashComponent from './components/Nested Components/Trash';
import LoginFormComponent from './components/Nested Components/LoginForm';
import RegistrationForm from './components/Registration-Form';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
        <Route path="Login" element={<LoginAction></LoginAction>}></Route>
        <Route path="Conditional" element={<ConditionalRenderView></ConditionalRenderView>}></Route>
        <Route path="mailbox" element={<MailView></MailView>}>
          <Route path="Inbox" element={<InboxComponent></InboxComponent>}></Route>
          <Route path="Starred" element={<StarredComponent></StarredComponent>}></Route>
          <Route path="Trash" element={<TrashComponent></TrashComponent>}></Route>
          <Route path="LoginForm" element={<LoginFormComponent></LoginFormComponent>}></Route>
        </Route>
        <Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
