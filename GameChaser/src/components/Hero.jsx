import {Button, Col, Container, Row} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'


const Hero = () => {
const navigate = useNavigate()    

    return (
        <Container className='mt-5 text-light '>
            <Row className='d- flex align-items-center p-4'>
                <Col md={6}>
                    <img className=' rounded-4' src ="../src/assets/imgs/gaming.jpg" alt="console gif" width='600vw' height="400vh"/>
                </Col>
                <Col md ={6} >
                    <h1 className='display-1'><b>Scopri i tuoi giochi preferiti su GameChaser!</b></h1>
                    <h2 className='mt-3'>Cerca i tuoi giochi preferiti per conoscere i loro dettagli.</h2>
                    <Button className = 'outline outline-primary mt-3' onClick={() => navigate('/search')} > Cerca il tuo gioco!</Button> 
                </Col>
            </Row>
            <Row >
                <Col className='d-flex justify-content-center'>
                
                </Col>
            </Row>
        </Container>
    )
}
export default Hero