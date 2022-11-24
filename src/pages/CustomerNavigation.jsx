import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomerNavigation() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/customer/dashboard">Circuit Breakers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/customer/dashboard">Home</Nav.Link>
            <Nav.Link href="/customer/addjob">Add Openings</Nav.Link>
            <Nav.Link href="#link2">Applied Candidates</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/user/login">LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomerNavigation;