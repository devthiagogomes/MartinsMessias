import Space from "../components/Space";
import "../css/Action-Plan-Page.css";

export default function ActionPlanPage() {
  return (
    <div className="container">
      <div className="title">
        <span
          style={{
            color: "white",
            border: "4px solid black;",
            display: "inline-block",
            color: "#1f2937",
          }}
        >
          &#8594;
        </span>{" "}
        <span className="highlight">Nosso</span> Plano de Ação
      </div>
      <Space height={10}></Space>
      <div className="investment-plan">
        <div className="planning-meeting">
          <div className="sub-title">
            1.<span className="highlight"> Reunião</span> de Alinhamento{" "}
          </div>
          <div className="action-plan">
            Nosso passo inicial será o agendamento de uma primeira reunião
            online ou presencial para que possamos conversar e conhecer as
            necessidades da sua empresa, bem como a melhor forma para
            auxiliarmos nos seus objetivos, seja ele a assessoria e consultoria
            periódica, seja a solução pontual de questões jurídicas. Com o
            entendimento inicial, será realizada uma análise preliminar para que
            possamos apresentar uma proposta de trabalho em até 10 dias úteis.
            Nessa oportunidade também poderemos sanar eventuais dúvidas a
            respeito dos nossos serviços e atuação diferenciada.
          </div>
        </div>
        <div className="divider" />
        <div className="planning-meeting">
          <div className="spacer-mobile" />
          <div className="sub-title">
            2.<span className="highlight"> Nossa</span> Atuação{" "}
          </div>
          <div className="upper-tree">
            <div className="initial-meeting">
            Reunião inicial
            </div>
            <div className="tree">
              <div className="left-wing">
                <div className="ball-divider">
                  <div className="ball-text">
                    Análise e verificação para envio da proposta inicial de
                    trabalho - 5 dias úteis
                  </div>
                  <div className="left-ball" />
                  <div className="ball-line" />
                </div>
                <div className="ball-divider">
                  <div className="ball-text">
                    Prazo de aceite da proposta conforme análise previamente
                    encaminhada - 20 dias
                  </div>
                  <div className="left-ball" />
                  <div className="ball-line" />
                </div>
                <div className="ball-divider">
                  <div className="ball-text">
                    Atendimento diferenciado durante toda a prestação de serviço
                  </div>
                  <div className="left-ball" />
                  <div className="ball-line" />
                </div>
              </div>
              <div className="ball-center-divider"> </div>
              <div className="right-wing">
                <div className="ball-divider">
                  <div className="ball-line" />
                  <div className="right-ball" />
                  <div className="ball-text">
                    Compreensão das necessidades empresariais
                  </div>
                </div>
                <div className="ball-divider">
                  <div className="ball-line" />
                  <div className="right-ball" />
                  <div className="ball-text">
                    Apontamento das possíveis soluções
                  </div>
                </div>
                <div className="ball-divider">
                  <div className="ball-line" />
                  <div className="right-ball" />
                  <div className="ball-text">
                    Com o aceita da proposta, iniciam-se os trabalhos
                    prioriizando as soluções mais emergenciais e o
                    acompanhamento contínuo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
