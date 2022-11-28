import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

function CustomerNavigation() {
  const location = useLocation();
  return (
    <>
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="dashboard">Circuit Breakers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="dashboard">Home</Nav.Link>
            <Nav.Link href="addjob">Add Openings</Nav.Link>
            <Nav.Link href="#link2">Applied Candidates</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/user/login">LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default CustomerNavigation;