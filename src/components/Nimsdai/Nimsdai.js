import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import nims from './Nimsdai.module.css'
const Nimsdai = () => {
    return (
        <div className={nims.container}>
            <div className={nims.header}>
            <h6 className={nims.text}>A team of Nepalese climbers has become the first ever to summit the world’s second highest mountain, K2, in winter.</h6>
                <h1 className={nims.title}> Nirmal ’Nims’ Purja</h1>
                <p className={nims.subtitle}>Conquering K2 in winter</p>
                
            </div>
            <blockquote>
                <p>On November 26, 2019, he announced his expedition to K2 in the winter festival 2020/2021, setting the goal of making the first ever winter ascent to the second peak of the planet. On January 16, the Nepalese climbed the top of Chogori, having made the first winter ascent of K2 - the last eight-thousander, which is completely unconquered in the cold season. Together with Purja, Dawa Temba Sherpa, Pemchiri Sherpa, Gelje Sherpa, Mingma Tenzi Sherpa, Mingma David Sherpa from his team, Mingma Gali Sherpa with Dawa Tenjing Sherpa and Kili Pemba Sherpa, as well as Sona Sherpa from the Seven Summit Treks team entered the summit.</p>
            </blockquote>
            <h2 className={nims.team_title}><span>NIRMALS TEAM</span></h2>
            <Container className={nims.team}>
                <Row className={nims.raw}>
                    <Col className={nims.col}>
                        <img alt='1' src='https://assets.cntraveller.in/photos/60ba24da002baf698cc6786c/4:3/w_1440,h_1080,c_limit/Nims-Lead-3.jpg'/>
                        <span>Nimsdai Purja</span>
                    </Col>
                    <Col className={nims.col}>
                        <img alt='1' src='https://images.prismic.io/elite-exped/1e6f4db6-c124-4e5d-b15c-ecd7d09bc50c_Mingma-3.jpg?auto=compress,format&rect=0,0,2727,3636&w=900&h=1200'/>
                        <span>Mingma David Sherpa</span>
                    </Col>
                    <Col className={nims.col}>
                        <img alt='1' src='https://images.prismic.io/elite-exped/f6268fec-365a-4537-abb4-feea4e653cc7_Mingma-hero-2.jpg?auto=compress,format&rect=941,799,1585,1981&w=960&h=1200'/>
                        <span>Mingma Tenzi Sherpa</span>
                    </Col>
                    <Col className={nims.col}>
                        <img alt='1' src='https://www.montagna.tv/wp-content/uploads/2021/01/Dawa-Temba-Sherpa.jpg'/>
                        <span>Dawa Temba Sherpa </span>
                    </Col>
                    <Col className={nims.col}>
                        <img alt='1' src='https://whitehilladventure.com/wp-content/uploads/2020/03/Pem-Chhiri-Sherpa.jpg'/>
                        <span>Pem Chiri Sherpa</span>
                    </Col>
                </Row>
                <div className={nims.divider}></div>
                <Row className={nims.raw}>
                    <Col className={nims.col}>
                        <img alt='1' src='https://pbs.twimg.com/profile_images/1359748026911186953/9JXOWal7_400x400.jpg'/>
                        <span>Geljen Sherpa</span>
                    </Col>
                    <Col className={nims.col}>
                        <img alt='1' src='https://live.staticflickr.com/2871/10335127775_fdcba44362_b.jpg'/>
                        <span>Dawa Tenzing Sherpa</span>
                    </Col>
                    <Col className={nims.col}>
                        <img alt='1' src='https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2021/10/14111947/Mingma-puja-1024x681.jpg'/>
                        <span>Mingma G</span>
                    </Col>
                    <Col className={nims.col}>
                        <img alt='1' src='https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/article_images/2020/05/19/file710quvib3pc1gyabekk3-1377924805-1531653167.jpg?itok=-a_Gx195'/>
                        <span>Kilu Pemba Sherpa</span>
                    </Col>
                    
                    <Col className={nims.col}>
                        <img alt='1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sona_Sherpa.jpg/300px-Sona_Sherpa.jpg'/>
                        <span>Sona Sherpa</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Nimsdai;