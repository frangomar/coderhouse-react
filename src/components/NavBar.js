import '../assets/navBar.css';
const NavBar = () => {
    return (
        <div className="navbar">
            <a href='#'>
                <div className="logo-container">
                    <h1 className='logo'>INDRA</h1>
                </div>
            </a>
            <ul className='nav-links'>
                <li className='nav-items'><a>remeras</a></li>
                <li className='nav-items'><a>pantalones</a></li>
                <li className='nav-items'><a>buzos</a></li>
            </ul>
            
        </div>
    )
}

export default NavBar;