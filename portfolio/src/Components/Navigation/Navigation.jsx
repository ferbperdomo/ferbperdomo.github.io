import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <NavLink to='/whoami'>
                            <Nav.Link as="span">Who am I?</Nav.Link>
                        </NavLink>
                        <NavLink to="/projects">
                            <Nav.Link as="span">My projects</Nav.Link>
                        </NavLink>
                        <NavLink to="/contact">
                            <Nav.Link as="span">Contact me :)</Nav.Link>
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navigation