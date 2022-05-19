import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import HomePage from './pages/HomePage/HomePage';
import UserDetailPage from './pages/JobDetailPage/UserDetailPage';
import './index.css';
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";
import axios from "axios";
import {EditUserPage} from "./pages/RegisterPage/EditUserPage";

const apiUrl = "https://go-course-work.herokuapp.com/"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
      localStorage.getItem('token').length > 0
  );
  const path = isLoggedIn ? '/edit' : '/login'
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem('dark_theme') === 'false'
  );
  const [windowWidth, setWindowWidth] = useState(() =>
    localStorage.getItem('window_size')
  );
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [usersVisible, setUsersVisible] = useState(12);

  // changes className of root body element so css variables can be used
  darkTheme
    ? (document.documentElement.className = 'theme-dark')
    : (document.documentElement.className = 'theme-light');

  useEffect(() => {
    // immediately set the dark theme on page render and every theme changes
    localStorage.setItem('dark_theme', darkTheme);

    // dependant on the windowWidth state and darkTheme state
  }, [darkTheme]);

  useEffect(() => {
    // call the handlewindowresize function when the window is resized
    window.addEventListener('resize', handleWindowResize);
    // immediately set the window size on page render and every window size changes
    localStorage.setItem('window_size', windowWidth);

    // cleanup event
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    setIsLoading(true);
    axios.get(apiUrl + "api/all")
        .then((response) => {
          if (response.status === 200){
            let users = response.data
            setUsers(users)
          }
        }, (error) => {
          console.log(error);
        }).catch((error) => {
      console.error(error);
    })
        .finally(() => {
          setIsLoading(false);
        });
  }, []);

  // toggle the theme - passed to ToggleSwitch component
  function handleThemeChange() {
    setDarkTheme(!darkTheme);
  }

  // function to set the windowWidth state
  function handleWindowResize() {
    setWindowWidth(window.innerWidth);
  }

  function showMoreJobs() {
    setUsersVisible((prevState) => prevState + 3);
  }

  return (
    <Router>
      <Header
        darkTheme={darkTheme}
        windowWidth={windowWidth}
        onWindowResize={handleWindowResize}
        onThemeChange={handleThemeChange}
        isLoggedIn={isLoggedIn}
        path={path}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Main>
        <Switch>
          <Route path="/login" exact>
            <LoginPage
            />
          </Route>
          <Route path="/sign-up" exact>
            <RegisterPage/>
          </Route>
          <Route path="/edit" exact>
            <EditUserPage/>
          </Route>
          <Route exact path='/'>
            <HomePage
              users={users}
              isLoading={isLoading}
              windowWidth={windowWidth}
              setIsLoading={setIsLoading}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              showMoreJobs={showMoreJobs}
              usersVisible={usersVisible}
            />
          </Route>
          <Route exact path='/user/:id'>
            <UserDetailPage
                users={users}
              setIsLoading={setIsLoading}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
