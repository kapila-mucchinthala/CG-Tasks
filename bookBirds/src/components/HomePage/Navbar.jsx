import Styles from './navbar.module.css';
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
    let navigate = useNavigate();

    return (
        <div className={Styles.navbar}>
            <div className={Styles.logo}>Book Birds</div>
            <div className={Styles.navbar_Search}>
                <input type="text" placeholder='Search here with title or author' />
                <button>Search</button>
            </div>
            <div className={Styles.navbar_Div}>
                <div onClick={() => { navigate('/Cart'); }}>Cart</div>
                <div>Login</div>
                <div>Sign up</div>
            </div>
        </div>
    )
}

