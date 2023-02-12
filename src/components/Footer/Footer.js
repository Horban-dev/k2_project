import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import foot from './Footer.module.css'
function Footer({id}) {
  return (
    <footer>
      <Container id={id} className={foot.container}>
      <Row>
        <Col className={foot.col}>
            <p className={foot.author}>
                <a className={foot.link} href='https://www.instagram.com/kak.stifler/' target="_blank" rel="noopener noreferrer">@Illia Horban </a> 2023
            </p>
        </Col>
        <Col className={foot.col}>
            <div>
                <a className={foot.link} href='https://github.com/Horban-dev' target="_blank" rel="noopener noreferrer"><BsGithub className={foot.icon}/></a> 
                <a className={foot.link} href='https://github.com/Horban-dev' target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </Col>
        <Col className={foot.col}>
            <div>
                <a className={foot.link} href='mailto:illia.horban@gmail.com' target="_blank" rel="noopener noreferrer"><AiOutlineMail className={foot.icon}/></a>
                <a className={foot.link} href='mailto:illia.horban@gmail.com' target="_blank" rel="noopener noreferrer">E-mail</a>
            </div>
        </Col>
      </Row>
    </Container>
    </footer>
  );
}

export default Footer;