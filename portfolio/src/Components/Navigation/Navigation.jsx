import { Navbar, Container, Nav, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {

    const value = [true]
    const [fullscreen, setFullscreen] = useState(true)
    const [showModal, setShowModal] = useState(false)

    function handleShow(breakpoint) {
        setFullscreen(breakpoint)
        setShowModal(true)
    }

    return (
        <>
            <Navbar onClick={() => handleShow(value)} expanded={false} expand="lg" sticky="top" bg="light" variant="light">
                <Container>
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

            <Modal show={showModal} fullscreen={fullscreen} onHide={() => setShowModal(false)}>

                <Modal.Header closeButton>
                    <Modal.Title>Welcome!</Modal.Title>
                </Modal.Header>

                <Modal.Body >
                    <NavLink to='/'>
                        <Nav.Link as="span">Main</Nav.Link>
                    </NavLink>
                    <NavLink to='/whoami'>
                        <Nav.Link as="span">Who am I?</Nav.Link>
                    </NavLink>
                    <NavLink to="/projects">
                        <Nav.Link as="span">My projects</Nav.Link>
                    </NavLink>
                    <NavLink to="/contact">
                        <Nav.Link as="span">Contact me :)</Nav.Link>
                    </NavLink>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Navigation