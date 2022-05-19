import {useState} from "react";
import "./RegisterPage.css";
import axios from "axios";

export const RegisterPage = () => {

    const apiUrl = "https://go-course-work.herokuapp.com/"
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [service_type, setService_type] = useState('');
    const [location, setLocation] = useState('');
    const [info, setInfo] = useState('');



    const handleLoginChange = (e) => {
        setLogin(e.target.value)
    }

    const handlerInfoChange = (e) => {
      setInfo(e.target.value)
    }

    const handleLocationChange = (e) => {
      setLocation(e.target.value)
    }

    const handleServiceType = (e) => {
        setService_type(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        let id  = axios.post(apiUrl + "auth/sign-up", { username: login, password, name, service_type, info, location })
            .then(res => res.data)
            .catch(err => {
                throw new Error(err)
            })
        if (id !== undefined){
            window.location.href = "/login";
        }
    }

    return (
        <h1>
            <form className="registerForm" onSubmit={handleRegister}>
                <h2>Create your account</h2>
                <div>
                    <input
                        className="registerFormInput"
                        type="text"
                        placeholder="Username"
                        onChange={handleLoginChange}
                        value={login}
                        required
                    />
                </div>
                <div>
                    <input
                        className="registerFormInput"
                        type="password"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        value={password}
                        required
                    />
                </div>
                <div>
                    <input
                        className="registerFormInput"
                        type="text"
                        placeholder="Name"
                        onChange={handleNameChange}
                        value={name}
                        required
                    />
                </div>
                <div>
                    <select
                        className="registerFormInput"
                        placeholder="Service type"
                        value={service_type}
                        onChange={handleServiceType}
                        required>
                        <option disabled>Service type</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Dry cleaning">Dry cleaning</option>
                        <option value="Cleaning">Cleaning</option>
                    </select>
                </div>
                <div>
                    <select
                        className="registerFormInput"
                        placeholder="Location"
                        value={location}
                        onChange={handleLocationChange}
                        required>
                        <option disabled>Location</option>
                        <option value="Moscow">Moscow</option>
                        <option value="Saint-Petersburg">Saint-Petersburg</option>
                        <option value="London">London</option>
                        <option value="Berlin">Berlin</option>
                    </select>
                </div>
                <div>
                    <input
                        className="registerFormInput"
                        type="text"
                        placeholder="Info"
                        onChange={handlerInfoChange}
                        value={info}
                        required
                    />
                </div>
                <div>
                    <button className="signUp" type="submit">
                        Sign-up
                    </button>
                </div>
            </form>
        </h1>
    );
};