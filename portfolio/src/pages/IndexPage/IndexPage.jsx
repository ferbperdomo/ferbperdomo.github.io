import { Container, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import icon from '../../img/icon.png'
import icon3 from '../../img/icon3.png'
import mern from '../../img/mern_icon.png'
import '../IndexPage/IndexPage.css'


const IndexPage = () => {


    return (
        <>
            <section id='hero'>
                <Container >
                    <article className='introduction'>
                        <p>Hi! <img className='wavy-hand' src="https://media.tenor.com/images/30169e4a670daf12443df7d2dd140176/tenor.gif" alt='wavy hand' /> I am</p>
                        <p className='brand'>Cristian Perdomo.</p>
                        <p className='career'>FullStack Developer</p>
                        <Button className='social' href="https://www.linkedin.com/in/cristian-perdomo-parra/" variant="outline-dark">Linkedin</Button>
                        <Button className='social' href='https://github.com/ferbperdomo' variant="outline-dark">Github</Button>
                    </article>
                    <article className='icon'>
                        <img src={icon} alt="icon floating" />
                    </article>
                </Container>

            </section>

            <section id='about'>
                <Container>
                    <article className='about-me'>
                        <h2>About me</h2>
                        <p>
                            After four years of teaching, I decided to decode my mind and recode it to be a developer. Now, I take advantage of my background and I see myself a strong communicator, adaptable, patient and, of course, a tech enthusiast.
                        </p>
                        <p>
                            I’ll help you translate your amazing and complex ideas into code while using JavaScript and MERN Stack, but always open to learn new things.
                        </p>
                        <div>
                            <img src={icon3} className="icon-about" alt="user icon" />
                        </div>
                    </article>

                </Container>
            </section>

            <section id='tech'>
                <Container>
                    <article className='tech-stack'>
                        <figure className='mern'>
                            <h2>Stack</h2>
                            <img src={mern} alt="MERN stack" />
                        </figure>
                        <Row>
                            <Col>
                                <h3>Frontend</h3>
                                <hr />
                                <ul>
                                    <li>JavaScrilit</li>
                                    <li>React</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                </ul>
                            </Col>
                            <Col>
                                <h3>Backend</h3>
                                <hr />
                                <ul>
                                    <li>Express</li>
                                    <li>Node</li>
                                    <li>Mongo</li>
                                    <li>Mongoose</li>
                                </ul>
                            </Col>
                        </Row>
                        <Col>
                            <h3>More</h3>
                            <hr />
                            <Row>
                                <Col>
                                    <ul>
                                        <li>Axios</li>
                                        <li>NPM</li>
                                        <li>Babel</li>
                                        <li>Vscode</li>
                                        <li>Notion</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Bootstrap</li>
                                        <li>Nodemailer</li>
                                        <li>Chrome Developer Tools</li>
                                        <li>JWT Json Web Token</li>
                                    </ul>
                                </Col>
                            </Row>
                            <div className="d-grid gap-2">
                                <Link to='/projects'>
                                    <Button className='btn-projects' >
                                        Projects
                                    </Button>
                                </Link>
                            </div>
                        </Col>

                    </article>
                </Container>
            </section>
            <section id='contact'>
                <Container>
                    <article className='contact'>
                        <h2>Contact</h2>
                        <p> If you want to contact me, please send me an email or set a 30' meeting.</p>
                        <Button className='email' href="mailto:ferbperdomo@gmail.com" variant="outline-dark">Email</Button>
                        <Button href="https://calendly.com/ferbperdomo/30min" variant="outline-dark">Meeting</Button>
                    </article>
                </Container>
            </section>
        </>

    )
}

export default IndexPage