import './App.css';
import Achievement from './components/achievement/Achievement';
import Footer1 from './components/footer/Footer1';
import Footer2 from './components/footer/Footer2';
import FooterImg from './components/footer/FooterImg';
import Location from './components/location/Location';
import MainFlex from './components/MainFlex';
import NavBar from './components/NavBar';
import Partner from './components/partner/Partner';
import Services from './components/services/Services';
import Support from './components/support/Support';

function App() {
  return (
    <div className='containerr'>
      <NavBar/>
      <MainFlex/>
      <Achievement/>
      <Support/>
      <Location/>
      <Services/>
      <Partner/>
      <Footer1/>
      <Footer2/>
      <FooterImg/>
    
    </div>
  );
}

export default App;
