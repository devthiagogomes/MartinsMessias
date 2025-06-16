import { Link } from 'react-router-dom';
import '../css/Header.css';
import SubLogo from '../assets/sublogo.png';
import Logo from '../assets/logo.png';

export default function Header() {
  return (
    <nav>
      <Link to="/" className="logo-container">
        <img src={Logo} alt="Logo" style={{ height: '70px' }} />
        <img src={SubLogo} alt="SubLogo" style={{ height: '100px' }} />
      </Link>

      <div className="button-container">
        <Link to="/" className="nav-link">Início</Link>
        <Link to="/nossos-valores" className="nav-link">Nossos Valores</Link>
        <Link to="/investimento" className="nav-link">Investimento</Link>
        <Link to="/plano-de-acao" className="nav-link">Plano de Ação</Link>
        <Link to="/contato" className="nav-link">Contato</Link>
      </div>
    </nav>
  );
}
