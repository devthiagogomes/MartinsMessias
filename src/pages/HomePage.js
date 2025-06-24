import { useNavigate } from "react-router-dom";
import "../css/Home-Page.css";
import Space from "../components/Space.js";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <div className="recuperation">
            <span className="highlight">Recuperação</span> de crédito tributário
            - ICMS
          </div>
          <div className="sub-text">
            Oferecemos serviço especializado para identificação de oportunidades
            de recuperação de <span className="highlight">crédito de ICMS</span>{" "}
            de apropriação através da portaria CAT 83/09.
          </div>
          <div
            className="pill"
            onClick={() => navigate("/plano-de-acao")}
            style={{ cursor: "pointer" }}
          >
            Descubra nosso trabalho
          </div>
        </div>
      </div>

      <div className="who-we-are">
        <div className="who-we-are-title">
          Quem <span className="highlight">Somos</span>
        </div>
        <div className="bottom-text">
          <div className="sub-text">
            Somos um{" "}
            <span className="highlight">uma empresa especializada</span> na
            recuperação de crédito ICMS, com mais de cinco anos de atuação no
            mercado e já auxiliamos empresas de diversos ramos a recuperarem
            mais de <span className="highlight">500 milhões de reais</span> junto ao orgãos fiscais através da CAT 83/09.
          </div>
          <Space height={2} />
          <div className="sub-text">
            Temos experiência diferenciada no mercado, com atuação
            sistematizada e procedimentos claros, oferecendo compliance empresarial, monitorando alterações legislativas e mitigando riscos.
          </div>
        </div>
      </div>
    </>
  );
}
