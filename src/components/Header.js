import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import SubLogo from '../assets/sublogo.png';
import Logo from '../assets/logo.png';

export default function Header() {
  return (
    <nav>
      <NavLink to="/" className="logo-container">
        <img src={Logo} alt="Logo" style={{ height: '70px' }} />
        {/* <img src={SubLogo} alt="SubLogo" style={{ height: '100px' }} /> */}
        <div className='art-deco'>Martins & Messias</div>
      </NavLink>

      <div className="button-container">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Início</NavLink>
        <NavLink to="/nossos-valores" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Nossas Diretrizes</NavLink>
        <NavLink to="/plano-de-acao" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Plano de Ação</NavLink>
        <NavLink to="/contato" className={({ isActive }) => isActive ? "contact-pill active" : "contact-pill"}>Contato</NavLink>
      </div>
    </nav>
  );
}
