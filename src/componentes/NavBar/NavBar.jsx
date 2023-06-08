import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="logo" src="./public/img/logo.png" alt="Logo de Dulce Mente" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                Quienes somos
                            </li>
                            <li className="nav-item">
                                Productos
                            </li>
                            <li className="nav-item">
                                Contacto
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