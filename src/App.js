import Header from './components/header/Header';
import Slider from './components/Slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Information from './components/Information/Information';


export default function App() {
  const handleClickScroll = () => {
    const element = document.getElementById('sec');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Header handleClickScroll={handleClickScroll}/>
      <Information id={'sec'}/>
      <Slider />
    </div>
  );
} 
