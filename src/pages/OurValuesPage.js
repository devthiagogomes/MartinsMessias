import Space from "../components/Space";
import "../css/Our-Values-Page.css";

export default function OurValuesPage() {
  return (
    <div className="container">
      <div className="upper-line" />
      <div className="title">
        <span className="highlight">Nossas</span> Diretrizes
      </div>
      <div className="lower-line" />
      <div className="values">
        <div className="upper-values">
          <div className="values-container">
            Inovação Contínua e Excelência Técnica
          </div>
          <div className="values-container">Confiabilidade e Integridade</div>
        </div>
        <div className="values-container lower-values">
          Responsabilidade Fiscal
        </div>
      </div>
      <Space height={6} />
      <div className={"sub-text"}>
        As empresas frequentemente acumulam créditos de{" "}
        <span className="highlight">ICMS não apropriados,</span> originados por
        equívocos na apuração, pela complexidade da interpretação legislativa
        tributária, ou pela não utilização de benefícios fiscais e créditos
        extemporâneos. 
      <Space height={2} />
        Nosso serviço especializado pode realizar uma 
        <span className="highlight"> minuciosa revisão fiscal e contábil</span> das operações dos últimos 60 meses,
        identificando e validando tais oportunidades de recuperação em estrita
        conformidade com a legislação vigente. 
        <Space height={2} />
        Por meio de um processo
        administrativo, torna-se viável a <span className="highlight">monetização desses ativos
        fiscais,</span> o que resulta na otimização do fluxo de caixa e na redução da
        carga tributária efetiva das organizações. <span className="highlight">A busca por um diagnóstico
        preciso pode revelar o significativo potencial de recuperação existente.</span>
      </div>
      <Space height={2} />
      <div className={"sub-text"}>
        Pautamos nossa atuação pela assertividade na defesa dos seus interesses,
        aliada a uma busca constante por{" "}
        <span className="highlight">inovação</span> em nossas estratégias e pela{" "}
        <span className="highlight">eficiência</span> na condução de cada caso.
      </div>
      <Space height={2} />
      <div className={"sub-text"}>
        Entendemos que a confiabilidade é fundamental na relação com nossos
        clientes, e por isso, nosso compromisso é prover um serviço
        que não apenas responda às suas demandas, mas que também{" "}
        <span className="highlight">
          inspire segurança e contribua para a solidez e o crescimento do seu
          negócio
        </span>
        , sempre em estrita conformidade com os preceitos éticos empresariais.
      </div>
    </div>
  );
}
