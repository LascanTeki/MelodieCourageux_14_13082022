import logo from '../Asset/logo.png'
import '../Style/Header.css'
import { Link } from 'react-router-dom'


function Header() {


    //if a username is entered in redux (after login) displays the loged in header with a name and a logout button

        return (
            <nav className="Header">
                <Link className="Logo-link" to="/">
                    <img className="Logo" src={logo} alt="HRnet Logo" />
                </Link>
                        <Link to="/Employee" className="view" >
                        View Current Employees
                        </Link>
            </nav>

        )

}

export default Header