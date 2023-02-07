import Header from './components/header/Header';
import Slider from './components/Slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';
import Links from './components/Links/Links';
import './App.css';
import Nimsdai from './components/Nimsdai/Nimsdai';

export default function App() {
  const handleClickScroll = () => {
    const element = document.getElementById('sec');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Links/>
      <Header handleClickScroll={handleClickScroll}/>
      <Information id={'sec'}/>
      <Slider />
      <Nimsdai/>
      <Footer />
    </>
  );
} 
