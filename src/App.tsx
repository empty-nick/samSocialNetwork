import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
// import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
      <div className="App">
        <Header />
        <Sidebar />
        <div className='app-content'>
          <Dialogs />
          {/*<Profile />*/}
        </div>

      </div>
  );
}

export default App;