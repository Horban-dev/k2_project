import React, {useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import info from './Information.module.css'
import {AiOutlineDown} from 'react-icons/ai'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
const Information = ({id}) => {
    const [showMore, setShowMore] = useState(false);
    const [first, setFirst] = useState(false)
    const [firstFirst, setFirstFirst] = useState(false)
    const [lastFirst, setLastFirst] = useState(false)
    const [lastMid, setLastMid] = useState(false)
    const [last, setLast] =useState(false)
    const onHoverLast = () => {
        setLast(!last)
    }
    const onHoverMid = () => {
        setLastMid(!lastMid)
    }
    const onHover = () => {
        setFirst(!first)
    }
    const onHoverfirst = () => {
        setFirstFirst(!firstFirst)
    }
    const lastFirstHover = () => {
        setLastFirst(!lastFirst)
    }
    const scrollToBOt = () => {
        const element = document.getElementById('bot');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const text = `4 August 1954: An expedition led and organized by Professor Ardito Desio of Milan University is the first to reach the summit of the world’s second highest mountain. On May 31, 1954, the expedition reached the foot of K2. In June, climbers got their first high-altitude camps on the Abrutsky Ridge. Bad weather and the death of Mario Pujos from pulmonary edema greatly slowed down the work. As soon as this became possible, the team returned to work, set up 9 camps and reached the summit.`;
    return (
        <div id={id} className={info.container}>
            <div className={info.img} data-background="https://k2.moncler.com/wp-content/uploads/2014/10/montagna.jpg"></div>
            <div className={info.general_information}>
                {
                    (first && firstFirst && lastFirst && lastMid && last) ? 
                   
                    <div onClick={scrollToBOt} className={info.bottom}>
                    <span>NEXT</span>
                    <AiOutlineDown/> 
                    </div>
                    
                    : 
                    null
                }
                <div className={info.title}>
                   <h2>K-2</h2>
                   <h5>HISTORY</h5>
                </div>
                <div className={info.last}>
                <button onMouseOver={onHoverLast} className={info.dateBtn}>1954</button>
                    <div className={info.modal}>
                        {last ? <p className={info.lastText}>On 31 July 1954, Italian climbers Achille Compagnoni and Lino Lacedelli became the first people to reach the summit of K2.</p> : null}
                    </div>
                </div>
                <div className={info.lastMid}>
                    <button onMouseOver={onHoverMid} className={info.dateBtn}>1939</button>
                    <div className={info.modal}>
                        {lastMid ? <p className={info.lastMidText}>1939 - The American expedition of Fritz Weisner set a new record by climbing to a height of 8382 m of the North-East Ridge of Abruzza.</p> : null}
                    </div>
                </div>
                <div className={info.lastFirst}>
                    <button onMouseOver={lastFirstHover} className={info.dateBtn}>1938</button>
                    <div className={info.modal}>
                        {lastFirst ? <p className={info.lastFirstText}>1938 - American expedition of Dr. Charles S. Houston hit 7925 m.</p> : null}
                    </div>
                </div>
                <div className={info.first}>
                    <button onMouseOver={onHover} className={info.dateBtn}>1902</button>
                    <div className={info.modal}>
                        {first ? <p className={info.firstText}>In 1902, the first attempt was made by Oscar Eckenstein and Aleister Crowley, but ended unsuccessfully. <br/>They were able to climb only to a height of 6525 m.</p> : null}
                    </div>
                </div>
                <div className={info.firstFirst}>
                    <button onMouseOver={onHoverfirst} className={info.dateBtn}>1856</button>
                    <div className={info.modal}>
                        {firstFirst ? <p className={info.firstFirstText}>Chogori was discovered by a European expedition in 1856.</p> : null}
                    </div>
                </div>
            </div>
            <div id={'bot'} className={info.bigText}>
                <div className={info.title}>
                    <h2>THE CONQUEST OF K2</h2>
                    <span>1954</span>
                </div>
                <div className={info.divider}/>
                <div className={info.text}>
                {showMore ? text : `${text.substring(0, 250)}...`}
                <span className={info.btn} onClick={() => setShowMore(!showMore)}>
                         {showMore ? "Show less" : "Show more"}
                </span>
                </div> 
                <div className={info.divider}/>
                <div className={info.carousel}>
                <Carousel showArrows={true} selectedItem={false} showStatus={false} infiniteLoop={true}>
                <div>
                    <img alt='first_expedition_team' src="https://upload.wikimedia.org/wikipedia/commons/4/43/Italian_K2_expedition%2C1954%2C_version_2_%28cropped%29.jpg"/>
                        <p className="legend">The first reachable peak of K2 Italian expedition in 1954 under the Ardito Desio.</p>
                    </div>
                <div>
                    <img alt='first_climbers' src="https://upload.wikimedia.org/wikipedia/commons/a/af/Compagnoni_and_Lacedelli_1954.jpg" />
                    <p className="legend">On 31 July 1954, Italian climbers Achille Compagnoni and Lino Lacedelli became the first people to reach the summit of K2.</p>
                </div>  
                <div>
                <img alt='sa' src="https://4sport.ua/_upl/2/1407/5_1406798524.jpg" />
                    <p className="legend">K2 expedition team, 1954.</p>
                </div>
                <div>
                <img alt='sa' src="https://i.guim.co.uk/img/media/d1042c4b7ed351952737001cdd474eb8fb3fb9c6/0_561_4961_2977/master/4961.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=c80471f23a08e1f33433437702ba648e" />
                    <p className="legend">Italian mountaineers conquer K2 – archive, 1954.</p>
                </div>
                </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Information;


{/* <p className={info.text}>
                K2, at 8,611 metres above sea level, is the second-highest mountain on Earth. <br/>
                K2 also became popularly known as the Savage Mountain after George Bell—a climber on the 1953 American expedition—told reporters, <em>"It's a savage mountain that tries to kill you".</em>
                Chogori is known as "Savage Mountain" because of the extreme difficulty of climbing. As of June 2018, the death rate was 23% for 367 climb attempts. <br/>
                </p> */}