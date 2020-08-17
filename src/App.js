import React from 'react';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      {sessionStorage.setItem("loggedInUser","")}
      {/* <Header>This is header content</Header> */}
      {/* <Sidenav data="side data"></Sidenav> */}
      <Content></Content>
      {/* <h1>Hello Thejesh.</h1> */}
      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
