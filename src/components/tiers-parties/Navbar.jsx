import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo use.jpg';

const Navbar = () => {
    return (
        <header className="p-2 d-flex justify-content-between align-items-center text-white">
            <div className='d-flex align-items-center'>
                <a href="/"><img src={logo} alt="" height={150} className='rounded-circle' /></a>
                <h1 className='text-white fw-bold ms-3'>La marche c’est l’pied</h1>
            </div>
            <nav className='w-50 fs-5'>
                <ul className="navbar-nav d-flex flex-row justify-content-around">
                    <li className="nav-item ml-2">
                        <NavLink end to="/" className="nav-link">Acceuil</NavLink>
                    </li>
                    <li className="nav-item ml-2">
                        <NavLink to="/parcours" className="nav-link">Parcours</NavLink>
                    </li>
                    <li className="nav-item ml-2">
                        <NavLink to="/evenements" className="nav-link">Evenements</NavLink>
                    </li>
                    <li className="nav-item ml-2">
                        <NavLink to="/a_propos" className="nav-link">A propos</NavLink>
                    </li>
                    <li className="nav-item ml-2">
                        {/* TODO: Mettre l'url correspondante */}
                        <a href="#" target='_blank' className="nav-link">S&apos;inscrire</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar