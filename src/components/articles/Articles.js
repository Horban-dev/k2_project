import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import redbull from '../../assets/images/redbull.png';
import liga from '../../assets/images/liga.png';
import loveexploring from '../../assets/images/loveexploring.png';
import sgbmedia from '../../assets/images/sgbmedia.png';
import nyt from '../../assets/images/nyt.png';
import art from './Articles.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
const Articles = () => {
    const dat = [
        {id: 1, img: redbull, link: 'https://www.redbull.com/se-en/nirmal-purja-k2-summit-winter', title: "Nirmal Purja's K2 winter summit proves ANYTHING is possible", date: 'January 16, 2021'},
        {id: 2, img: liga, link: 'https://news.liga.net/world/news/legendarnuyu-vershinu-k2-vpervye-pokorili-zimoy-eto-sdelali-alpinisty-iz-nepala-foto', title: "The legendary peak K-2", date: 'January 16, 2021'},
        {id: 3, img: nyt, link: 'https://www.nytimes.com/2021/01/19/sports/summit-k2-nepalese-sherpas.html', title: 'How Climbers Reached the Summit of K2 in Winter for the First Time', date: 'January 19, 2021'},
        {id:4, img: loveexploring, link: 'https://www.loveexploring.com/news/108161/every-step-counts-nimsdai-nims-purja-on-being-the-first-to-conquer-k2', title: '"Every step counts": Nimsdai ‘Nims’ Purja on being the first to conquer K2 in winter', date: 'March 15, 2022'},
        {id: 5, img: sgbmedia, link: 'https://sgbonline.com/pressrelease/osprey-sponsors-nimsdai-purja-in-bid-for-k2-winter-2020-21-ascent/', title: 'Osprey Sponsors Nimsdai Purja In Bid For K2 Winter 2020/21 Ascent', date: 'January 7, 2021'},
        {id: 6, img: sgbmedia, link: 'https://sgbonline.com/pressrelease/osprey-sponsors-nimsdai-purja-in-bid-for-k2-winter-2020-21-ascent/', title: 'Osprey Sponsors Nimsdai Purja In Bid For K2 Winter 2020/21 Ascent', date: 'January 7, 2021'}
    ]
    const [visible, setVisible] = useState(2);
    const [articlesFinished, setArticlesFinished] = useState(false)
    console.log(visible)
    const showMoreItems = () => {
        if(visible > dat.length) {
            setArticlesFinished(true)
        } else {
            setVisible((prevValue) => prevValue + 2);
        }
       
    };
    return (
        <>
        <Container className={art.container}>
        <Row className={art.row}>
        {dat?.slice(0, visible).map(item => {
            return (
            <>
            <Col xs={12} md={6} xl={6} className={art.col} key={item.id}>
                <a  href={item.link} target='_blank' rel="noreferrer">
                <img className={art.img} alt={item.title.substring(0, 25) + '...'} src={item.img}/>
                </a>
                <a className={art.link} href={item.link} target='_blank' rel="noreferrer">
                    <h6 className={art.title}>
                        {item.title}
                    </h6>
                </a>
                <span className={art.date}>{item.date}</span>
            </Col>           
            </>
            )
        })}
          </Row>
    </Container>
    <div onClick={showMoreItems} className={art.btn}>
        {
        articlesFinished ? 
        <button disabled className={art.button}>There are no more currently available articles...</button> :
        <>
            <button className={art.button}>More articles</button>
            <br></br>
            <AiOutlinePlusCircle className={art.icon}/>
        </>
        }
        
    </div>
        </>
    );
};

export default Articles;