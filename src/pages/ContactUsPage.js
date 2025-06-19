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
          crédito. Preencha o formulário abaixo ou entre em contato diretamente
          conosco. Nossa equipe especializada terá o prazer de entender sua
          necessidade e oferecer uma consultoria personalizada, com
          transparência, segurança e agilidade. Fale conosco e descubra como
          podemos transformar suas possibilidades em resultados.
        </div>
        <div class="contact-form-container">
          <form action="https://formsubmit.co/your@email.com" method="POST">
            <div className="name-email-container">
              <div class="form-group">
                <label for="name">Seu Nome*</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div class="form-group">
                <label for="email">Seu E-mail*</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div class="form-group">
              <label for="message">Sua Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
