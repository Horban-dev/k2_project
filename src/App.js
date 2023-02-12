
import MainScreen from './components/header/MainScreen';
import Slider from './components/Slider/Slider';
import Information from './components/Information/Information';
import Nimsdai from './components/Nimsdai/Nimsdai';
import Footer from './components/Footer/Footer';
import Links from './components/Links/Links';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <BrowserRouter>
      <Links handleClickScroll={handleClickScroll}/>
      <MainScreen id={'home'} handleClickScroll={handleClickScroll}/> 
      <Information id={'sec'}/>
      <Slider id={'slide'}/>
      <Nimsdai id={'nimsdai'}/>
      <Footer id={'footer'} />
      </BrowserRouter>
    </>
  );
} 
