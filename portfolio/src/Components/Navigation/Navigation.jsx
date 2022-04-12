import { Navbar, Container, Nav } from 'react-bootstrap'
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
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navigation