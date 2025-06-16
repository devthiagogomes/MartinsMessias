import { Link } from 'react-router-dom';

export default function OurValuesPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bem-vindo à <span style={styles.highlight}>Empresa X</span></h1>
      <p style={styles.subtitle}>
        OurValues
      </p>
      <a href="/contato" style={styles.button}>
        Fale Conosco
      </a>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    padding: '0 20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: '48px',
    margin: '0',
    color: '#333',
  },
  highlight: {
    color: '#007bff',
  },
  subtitle: {
    fontSize: '20px',
    color: '#555',
    maxWidth: '600px',
    margin: '20px 0',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px 24px',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  },
};
