import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import nims from './Nimsdai.module.css'
import { firstRow, secondRaw, mainText } from './data';
import Articles from '../articles/Articles';
const Nimsdai = ({id}) => {
    return (
        <div id={id} className={nims.container}>
            <div className={nims.header}>
            <h6 className={nims.text}>A team of Nepalese climbers has become the first ever to summit the world’s second highest mountain, K2, in winter.</h6>
                <h1 className={nims.title}> Nirmal ’Nims’ Purja</h1>
                <p className={nims.subtitle}>Conquering K2 in winter</p>
            </div>
            <blockquote>
                <p>{mainText}</p>
            </blockquote>
            <h2 className={nims.team_title}><span>NIRMALS TEAM</span></h2>
            <Container className={nims.team}>
                <Row className={nims.raw}>
                    {firstRow.map((item) => {
                        return (
                        <Col  key={item.id} className={nims.col}>
                            <img alt={item.name} src={item.photo}/>
                            <span>{item.name}</span>
                        </Col>
                        )    
                    })}
                </Row>
                <div className={nims.divider}></div>
                <Row className={nims.raw}>
                {secondRaw.map((item) => {
                        return (
                        <Col className={nims.col}>
                            <img alt={item.name} src={item.photo}/>
                            <span>{item.name}</span>
                        </Col>
                        )    
                    })}
                </Row>
            </Container>
            <Articles/>
        </div>
    );
};

export default Nimsdai;