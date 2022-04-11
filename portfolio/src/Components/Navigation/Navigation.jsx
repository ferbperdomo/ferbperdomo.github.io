import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="fixed-top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">CP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav.Link href="#about">Who am I?</Nav.Link>
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