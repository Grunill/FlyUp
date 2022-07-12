import { Container, Navbar, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        border="bottom"
        mb="3"
        className="navbar-dark"
      >
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">
              <b style={{ color: "firebrick" }}>fly</b>
              <b>up.uk</b>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
              <Link className="nav-link text-light" to="/Videos">
                Videos
              </Link>
              <Link className="nav-link text-light" to="/About">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
      <Outlet />
    </>
  );
};

export default Layout;
