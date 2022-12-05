import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/auth'

function Jobseekernavigation() {
  const location = useLocation()
  const auth = useAuth()
  return (
    <>
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="dashboard">Circuit Breakers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="dashboard">Home</Nav.Link>
            <Nav.Link href="appliedjobs">Applied Jobs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/user/login" onClick={()=>{auth.logout()}}>LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default Jobseekernavigation;