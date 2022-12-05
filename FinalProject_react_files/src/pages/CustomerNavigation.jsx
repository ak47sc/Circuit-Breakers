import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth'

function CustomerNavigation() {
  const location = useLocation();
  const auth = useAuth()
  const navigate = useNavigate();
  return (
    <>
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => {navigate("dashboard")}}>Circuit Breakers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate("dashboard")}} >Home</Nav.Link>
            <Nav.Link onClick={() => {navigate("addjob")}}>Add Openings</Nav.Link>
            <Nav.Link href="#link2">Applied Candidates</Nav.Link>
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

export default CustomerNavigation;