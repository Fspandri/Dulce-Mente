import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to={"/"}>
                        <img className="logo" src="../public/img/logo.png" alt="Logo de Dulce Mente"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li>
                                <NavLink className="estiloNavbar" to={"/productos/tortas"}>Tortas</NavLink>
                            </li>
                            <li>
                                <NavLink className="estiloNavbar" to={"/productos/fingerfood"}>Finger Food</NavLink>
                            </li>
                        </ul>
                        <CartWidget />
                    </div>                    
                </div>                
            </nav>
        </header>
    )
}


export default NavBar