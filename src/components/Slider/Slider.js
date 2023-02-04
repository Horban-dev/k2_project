import React from 'react';
import slider from './Slider.module.css'
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  const items = [
    {id: 1, src: "https://www.mensjournal.com/wp-content/uploads/2021/07/k2.jpg?quality=78&strip=all",  alt: "First slide"},
    {id: 2, src: "https://www.meteorologiaenred.com/wp-content/uploads/2020/10/ascenso-del-k2.jpg",  alt: "Second slide"},
    {id: 3, src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",  alt: "Third slide"},
    {id: 4, src: "https://lp-cms-production.imgix.net/2021-01/7%20Concordia%20Camp%206715.jpg",  alt: "Fourth slide"},
    {id: 5, src: "https://lp-cms-production.imgix.net/image_browser/11%20K2%20base%20camp%207147.jpg?auto=format&q=75",  alt: "Fifth slide"},
    {id: 6, src: "https://sp-images.summitpost.org/628397.jpg?auto=format&fit=max&h=1000&ixlib=php-2.1.1&q=35&s=f5f0e4d332cd1e250df5bcf84e0bc1fc",  alt: "Six slide"},
  ]
  return (
    <div className={slider.container}>
    <Carousel variant="light" indicators={true} fade={true} className={slider.carousel}>
      {items.map((item) => (
         <Carousel.Item >
         <img
           className={slider.slide}
           src={item.src}
           alt={item.alt}
         />
       </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}

export default Slider;