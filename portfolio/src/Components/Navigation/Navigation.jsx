import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="fixed-top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">ferbperdomo~</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav.Link href="#about">About me</Nav.Link>
                        <NavLink to="/projects">
                            <Nav.Link as="span">Projects</Nav.Link>
                        </NavLink>
                        <NavLink to="/contact">
                            <Nav.Link as="span">Contact</Nav.Link>
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navigation