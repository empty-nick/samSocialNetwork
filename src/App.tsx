import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {IPost} from "./interface";

function App({postsData} : {postsData:IPost[]}) {
  return (
      <BrowserRouter>
        <div className='App'>
          <Header/>
          <Sidebar/>
          <div className='app-content'>
            <Routes>
              <Route path='/profile/*' element={<Profile postsData={postsData}/>}/>
              <Route path='/messages/*' element={<Dialogs/>}/>
              <Route path='/news/*' element={<News />}/>
              <Route path='/music/*' element={<Music />}/>
              <Route path='/settings/*' element={<Settings />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;