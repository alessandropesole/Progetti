import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'

function BasicExample() {
    const navigate = useNavigate()
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand className='text-light'  href="#" onClick={() => navigate('/')}>GameChaser</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light' href="#" onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link  className='text-light' href="#" onClick={()=> navigate ('/preferiti')}>Preferiti</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;