import Space from "../components/Space";
import "../css/Contact-Us-Page.css";

export default function ContactUsPage() {
  return (
    <div className="container">
      <div className="title">
        <span className="highlight">Contato</span>
      </div>
      <div className="contact-information">
        <div className="contact-text">
          Estamos prontos para ajudar você a conquistar as melhores soluções de
          crédito. Preencha o formulário abaixo ou entre em contato <span className="highlight">diretamente
          conosco. </span> 
          <Space height={2} />
          Nossa equipe especializada terá o prazer de entender sua
          necessidade e oferecer um <span className="highlight">serviço personalizado</span>, com
          transparência, segurança e agilidade. 
          <Space height={2} />
          Fale conosco e descubra como
          podemos transformar suas possibilidades em <span className="highlight">resultados.</span>
        </div>
        <div class="contact-form-container">
          <form action="https://formsubmit.co/lmmessias1818@gmail.com" method="POST">
            <div className="name-email-container">
              <div class="form-group">
                <label for="name">Seu Nome*</label>
                <input className="input-text" type="text" id="name" name="name" required />
              </div>

              <div class="form-group">
                <label for="email">Seu E-mail*</label>
                <input className="input-text" type="email" id="email" name="email" required />
              </div>
            </div>
            <div class="form-group">
              <label for="message">Sua Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="input-text"
              ></textarea>
            </div>

            <button type="submit" class="submit-button">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
