import { useState } from "react";
import { useHistory } from "react-router";
import "./LoginPage.css";
import axios from "axios";

export const LoginPage = () => {

  const history = useHistory()
  const apiUrl = "https://go-course-work.herokuapp.com/"
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    axios.post(apiUrl + "auth/sign-in", { username: login, password })
        .then((response) => {
          if (response.status === 200 && response.data.token.length > 0){
            localStorage.setItem('token', "Bearer " + response.data.token)
            history.push("/")
          }
        }, (error) => {
          console.log(error);
        })
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    history.push('/sign-up')
  }

  return (
    <h1>
      <form className="loginForm" onSubmit={handleLogIn}>
        <h2>Authorization</h2>
        <div>
          <input
            className="loginFormInput"
            type="text"
            placeholder="Username"
            onChange={handleLoginChange}
            value={login}
            required
          />
        </div>
        <div>
          <input
            className="loginFormInput"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
            required
          />
        </div>
        <div>
          <button className="blackBtn" type="submit">
            Sign-in
          </button>
          <button className="signUpBtn" onClick={handleSignUp}>
            Sign-up
          </button>
        </div>
      </form>
    </h1>
  );
};
