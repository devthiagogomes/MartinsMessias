import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}
