import { Navbar, Container, Nav, NavLink } from 'react-bootstrap'
import './Navigation.css'
const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Ferbperdomo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <NavLink to='/whoami'>
                        <Nav.Link as="span">Who am I?</Nav.Link>
                    </NavLink>
                    <NavLink to="/">
                        <Nav.Link as="span">My projects</Nav.Link>
                    </NavLink>
                    <NavLink to="/">
                        <Nav.Link as="span">Contact me :)</Nav.Link>
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation