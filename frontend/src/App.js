import './App.scss';
import { HashRouter, Routes, Route } from "react-router-dom"

// components
import MainHeader from './components/MainHeader';

// pages
import HomePage from './pages/HomePage';
import StoryListPage from './pages/StoryListPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CheckLoginPage from './pages/CheckLoginPage';
import { useState } from 'react';
import Paranews from './api/paranewsAPI';
import SearchPage from './pages/SearchPage';
import ParaImages from './api/unsplashAPI';
import AddImage from './components/addImage';


function App() {
  // states
  const [username, setUsername] = useState("")

  // render
  return (
    
    <div id="app">
      <div id="wrapper">
      <HashRouter>
     
        <MainHeader className="glitch" data-text="Abby Normal" username={ username } setUsername={ setUsername }/>
        <h1 className="glitch" data-text="Abby Normal">Abby Normal</h1>
        <span className="sub">Abnormal Stories</span>
        {/* <div class="drop"></div>
        <div class="wave"></div> */}
        
        <Routes>
          {/* auth routes (logout functionality was shoe-horned into MainHeader.js) */}
          <Route path="/login" element={ <LoginPage setUsername={ setUsername }/> } />
          <Route path="/signup" element={ <SignUpPage /> } />

          {/* main routes */}
          <Route path="/" 
            element={ <CheckLoginPage 
              username={ username } 
              actualPage={ () => <HomePage username={ username } /> } 
            /> } 
          />
          <Route path="/my-stories/:id" 
            element={ <CheckLoginPage 
              username={ username } 
              actualPage={ () => <StoryListPage username={ username } /> } 
            /> } 
          />
          <Route path="/articles"  element={ <CheckLoginPage 
              username={ username } 
              actualPage={ () => <Paranews username={ username } /> } 
            /> } 
          />
          <Route path="/images"  element={ <CheckLoginPage 
              username={ username } 
              actualPage={ () => <ParaImages username={ username } /> } 
            /> } 
          />
          <Route path="/my-images"  element={ <CheckLoginPage 
              username={ username } 
              actualPage={ () => <AddImage username={ username } /> } 
            /> } 
          />
          <Route path="/stories/"  element={ <CheckLoginPage 
              username={ username } 
              actualPage={ () => <SearchPage username={ username } /> } 
            /> } 
          />
        </Routes>
        
      </HashRouter>
    </div>
      <div id='credit'>
        {/* <a href="https://unsplash.com/@cozmicphotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Image credit: Nathan Wright</a> on <a href="https://unsplash.com/s/photos/abnormal-paranormal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
        Photo by <a href="https://unsplash.com/@kiwihug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kiwihug</a> on <a href="https://unsplash.com/@jmdalewalker/likes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a><br/>
        <a target="_blank" href="https://icons8.com/icon/wNYholTrIjIi/back">Back</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br/>
        <a target="_blank" href="https://icons8.com/icon/0QUXCfhc7OFH/ghost">Ghost</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  
      </div>
    </div>

    
  );
}

export default App;