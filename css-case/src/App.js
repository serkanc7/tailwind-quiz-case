import './App.css';
import Best from './components/Best';
import Customers from './components/Customers';
import Footer from './components/Footer';
import Grow from './components/Grow';
import Header from './components/Header';
import Hero from './components/Hero';
import Join from './components/Join';
import Map from './components/Map';

function App() {
  return (
    <div className='font-roboto'>
      <Header/>
      <Hero/>
      <Best/>
      <Join/>
      <Customers/>
      <Grow />
      <Map />
      <Footer/>
    </div>
  );
}

export default App;
