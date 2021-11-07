import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import SectionFive from './components/sectionFive/SectionFive';
import SectionThree from './components/sectionThree/SectionThree';
import SectionTwo from './components/sectionTwo./SectionTwo';
import Hero from './components/hero/Hero';
import SectionFour from './components/sectionFour/SectionFour';

function App() {
  return (
    <div className="App">
      <Hero/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <Footer/>
    </div>
  );
}

export default App;
