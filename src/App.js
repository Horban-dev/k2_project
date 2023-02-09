import MainScreen from './components/header/MainScreen';
import Slider from './components/Slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';
import Links from './components/Links/Links';
import './App.css';
import Nimsdai from './components/Nimsdai/Nimsdai';


export default function App() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Links handleClickScroll={handleClickScroll}/>
      <MainScreen id={'home'} handleClickScroll={handleClickScroll}/>
      <Information id={'sec'}/>
      <Slider id={'slide'}/>
      {/* <Nimsdai id={'nimsdai'}/> */}
      <Footer id={'footer'} />
    </>
  );
} 
