import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../utils/auth';

function Adminnavigation() {
  const auth = useAuth()
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="profile">Circuit Breakers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="profile">Openings</Nav.Link>
            <Nav.Link href="candidates">Candidates</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/user/login" onClick={auth.logout}>LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default Adminnavigation;