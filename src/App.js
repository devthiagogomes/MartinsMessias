import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import OurValuesPage from './pages/OurValuesPage';
import ContactUsPage from './pages/ContactUsPage';
import ActionPlanPage from './pages/ActionPlanPage';
import InvestmentPage from './pages/InvestmentPage';
import NotFoundPage from './pages/NotFoundPage'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nossos-valores" element={<OurValuesPage />} />
        <Route path="/investimento" element={<InvestmentPage />} />
        <Route path="/plano-de-acao" element={<ActionPlanPage />} />
        <Route path="/contato" element={<ContactUsPage />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
