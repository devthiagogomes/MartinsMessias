import Space from '../components/Space';
import '../css/Our-Values-Page.css';

export default function OurValuesPage() {
  return (
    <div className='container'>
      <div className='upper-line'/>
      <div className='title'>
            <span className="highlight">Nossos</span> Valores
      </div>
      <div className='lower-line'/>
      <Space height={64}/>
      <div className={'sub-text'}>Nosso escritório dedica-se a oferecer soluções jurídicas empresariais construídas sobre os pilares da  <span className="highlight">transparência</span> em cada interação. </div>
      <Space height={32}/>
      <div className={'sub-text'}>
      Pautamos nossa atuação pela assertividade na defesa dos seus interesses, aliada a uma busca constante por <span className="highlight">inovação</span> em nossas estratégias e pela <span className="highlight">eficiência</span> na condução de cada caso.  
      </div>
      <Space height={32}/>
      <div className={'sub-text'}>Entendemos que a confiabilidade é fundamental na relação com nossos clientes, e por isso, nosso compromisso é prover uma assessoria jurídica que não apenas responda às suas demandas, mas que também  <span className="highlight">inspire segurança e contribua para a solidez e o crescimento do seu negócio</span>, sempre em estrita conformidade com os preceitos éticos da advocacia.</div>
    </div>
  );
}
