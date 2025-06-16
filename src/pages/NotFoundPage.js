import { Link } from 'react-router-dom';
import '../css/Home-Page.css';
import Space from '../components/Space.js';

export default function HomePage() {
  return (
    <>
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <div className='recuperation'>
            <span className="highlight">Recuperação</span> de crédito tributário
          </div>
          <div className='sub-text'>
            Identificamos créditos não aproveitados e transformamos tributos pagos a mais em <span className="highlight">fluxo de caixa</span> para sua empresa.
          </div>
          <Link to="/contato" className="pill">Descubra nosso trabalho</Link>
        </div>
      </div>

      <section className="who-we-are">
        <div className='recuperation'>Quem Somos</div>
        <div>
        <div className='sub-text'>
        Somos um <span className="highlight">escritório especializado</span> na atuação empresarial, com sócios e parceiros com mais de 10 anos de atuação em demandas empresariais, cíveis, gestão e solução de casos complexos, através de estratégias que buscam o equilíbrio entre segurança e rapidez, por reconhecermos a necessidade dinâmica do meio empresarial.
        </div>
        <Space height={40} />
        <div className='sub-text'>
        Temos experiência diferenciada no mercado, com atuação sistematizada, procedimentos claros e focados na melhoria da qualidade de atendimento do cliente.
        </div>
        </div>
      </section>
    </>
  );
}
