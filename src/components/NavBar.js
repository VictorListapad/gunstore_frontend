import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
export const NavBar = () => {
  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">{`Smoke&Barrels`}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Firearms" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/pistols">Pistols</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/rifles">Rifles</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/ammunition" className="custom-nav-link">
              Ammunition
            </Link>
            <Link to="/gear" className="custom-nav-link">
              Gear
            </Link>
            <Link to="/contacts" className="custom-nav-link">
              Contacts
            </Link>
            <Link to="/about" className="custom-nav-link">
              About
            </Link>
            <NavDropdown title="Controls" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/addPistol">Add Pistol</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/addRifle">Add Rifle</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/addAmmo">Add Ammo</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/addGear">Add Gear</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/edit">Edit</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/signup" className="custom-nav-link">
              Sign Up
            </Link>
            <Link to="/login" className="custom-nav-link">
              Log In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
