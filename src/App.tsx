import Navbar from './components/Navbar';
import Hero from './components/Hero';
import USP from './components/USP';
import HowItWorks from './components/HowItWorks';
import Technology from './components/Technology';
import Marketplace from './components/Marketplace';
import Locator from './components/Locator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <div className="container">
        <USP />
        <HowItWorks />
        <Technology />
        <Marketplace />
        <Locator />
      </div>
      <Footer />
    </div>
  );
}

export default App;
