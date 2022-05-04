import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isAuthenticated, signoutUser } from "../services/authService";
import "../styles/NavBar.css";
export const NavBar = () => {
  const user = isAuthenticated();
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
            {user.role === "MODERATOR" || user.role === "ADMIN" ? (
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
                  <Link to="/edit">Edit Inventory</Link>
                </NavDropdown.Item>
                {user.role === "ADMIN" ? (
                  <NavDropdown.Item>
                    <Link to="/editUsers">Edit Users</Link>
                  </NavDropdown.Item>
                ) : null}
              </NavDropdown>
            ) : null}
          </Nav>
          <Nav>
            {user ? (
              <>
                <span className="user-name">{user.name}</span>
                <Button onClick={signoutUser} className="sign-btn">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/signUp" className="custom-nav-link">
                  Sign Up
                </Link>
                <Link to="/signIn" className="custom-nav-link">
                  Log In
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
