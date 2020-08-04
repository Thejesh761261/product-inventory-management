import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidenav from './components/sideNavbar/Sidenav';
import Content from './components/Content';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header>This is header content</Header>
      <Sidenav data="side data"></Sidenav>
      <Content></Content>
      {/* <h1>Hello Thejesh.</h1> */}
      <Footer></Footer>

    </div>
  );
}

export default App;
