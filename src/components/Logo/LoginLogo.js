import './Logo.css';
import {Link} from "react-router-dom";
import logo from '../../assets/desktop/login-logo.png';

const LoginLogo = ({path}) => {
    return (
        <Link to={path} className='logo'>
            <img width="30px" height="30px" src={logo} alt='logo' />
        </Link>
    );
};

export default LoginLogo;