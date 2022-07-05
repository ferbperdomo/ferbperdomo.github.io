import { Container, Button, Col, Row } from 'react-bootstrap'
import icon from '../../img/icon.png'
import mern from '../../img/mern.png'
import coraje from '../../img/coraje.png'
import cloudy from '../../img/cloudynight.png'
import irongame from '../../img/irongame.png'
import remitt from '../../img/remitt.png'
import clonetflix from '../../img/clonetflix.png'
import '../IndexPage/IndexPage.css'

const IndexPage = () => {


    return (
        <Container>
            <section id='hero'>
                <Container >
                    <article className='introduction'>
                        <p>Hi! <img className='wavy-hand' src="https://media.tenor.com/images/30169e4a670daf12443df7d2dd140176/tenor.gif" alt='wavy hand' /> I am</p>
                        <p className='brand'>Cristian Perdomo.</p>
                        <p className='career'>FullStack Developer</p>
                        <Button className='social' href="https://www.linkedin.com/in/cristian-perdomo-parra/" variant="outline-dark" target="_blank">Linkedin</Button>
                        <Button className='social' href='https://github.com/ferbperdomo' variant="outline-dark" target="_blank">Github</Button>
                        <br />
                        <figure className='icon'>
                            <img src={icon} alt="icon using a computer" />
                        </figure>
                        <figure className='mern' >
                            <img src={mern} alt="MERN stack" />
                        </figure>
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
                            As FullStack developer, I am fluent in JavaScript, React, HTML5 and CSS3, regarding the Frontend, and Express, Node, Mongo and Mongoose, regarding the Backend </p>
                        <p>I have experience with frameworks, libraries and tools such as Axios, Babel, Vscode, Notion, JWT, NPM, Nodemailer, Bootstrap, Chrome Developer Tools.</p>
                        <p>I am a native Spanish speaker, fluent in English and begginer in French.  </p>
                    </article>
                </Container>
            </section>

            <section id='projects'>
                <Container>
                    <article>
                        <h2>Projects</h2>
                        <Row>
                            <Col xs={12} md={6} className='images'>
                                <img src={clonetflix} alt="app clonetflix screenshot" />
                            </Col>
                            <Col xs={12} md={6}>
                                <h3>Clonetflix</h3>
                                <p>Responsive netflix clone that allows user to register and simulate payments the same way netflix does and allows them to watch trailers and add the movies to their list.</p>
                                <h3>Technologies</h3>
                                <p>TypeScript, Nextjs, Tailwind, Stripe, TMBD api, Auth with Firebase, and vercel for hosting.</p>
                                <Button variant='outline-dark' href='https://clonetflix.vercel.app/' target="_blank">Visit page </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6} className='images'>
                                <img src={remitt} alt="app remitt screenshot" />
                            </Col>
                            <Col xs={12} md={6}>
                                <h3>Remitt</h3>
                                <p>Responsive SPA used to compare fees and amount received in money transfers around the world.</p>
                                <h3>Technologies</h3>
                                <p>React, transferwise API, tailwind, Vercel for hosting.</p>
                                <Button variant='outline-dark' href='https://remitt.vercel.app/' target="_blank">Visit page </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6} className='images'>
                                <img src={coraje} alt="app coraje screenshot" />
                            </Col>
                            <Col xs={12} md={6}>
                                <h3>Coraje</h3>
                                <p>Responsive SPA to register, look for, and share LGBTQ+ safe places. </p>
                                <h3>Technologies</h3>
                                <p>React, Google Maps and Geolocation APIs, bootstrap, Heroku and Netlify for hosting.</p>
                                <Button variant='outline-dark' href='https://coraje.netlify.app/' target="_blank">Visit page </Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={6} className='images'>
                                <img src={cloudy} alt="app cloudynight screenshot" />
                            </Col>
                            <Col xs={12} md={6}>
                                <h3>Cloudy Night</h3>
                                <p>Responsive SPA to check the current weather and forecast around the world. </p>
                                <h3>Technologies</h3>
                                <p>DOM and HBS, Openweather and Google Maps APIs, Heroku for hosting.</p>
                                <Button variant='outline-dark' href='https://cloudy-night.herokuapp.com/' target="_blank">Visit page </Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={6} className='images'>
                                <img className='irongame' src={irongame} alt="videogame irongame screenshot" />
                            </Col>
                            <Col xs={12} md={6}>
                                <h3>Irongame</h3>
                                <p>Desktop survival game inspired by The Binding of Isaac. </p>
                                <h3>Technologies</h3>
                                <p>Canvas, html, css and DOM manipulation.</p>
                                <Button variant='outline-dark' href='https://ferbperdomo.github.io/irongame/' target="_blank">Visit page </Button>
                            </Col>
                        </Row>
                    </article>
                    <hr />
                </Container>
            </section>
            <section id='contact'>
                <Container>
                    <article className='contact'>
                        <h2>Contact</h2>
                        <p> If you want to contact me, please send me an email or set a 30' meeting.</p>
                        <Button className='email' href="mailto:ferbperdomo@gmail.com" variant="outline-dark">Email</Button>
                        <Button href="https://calendly.com/ferbperdomo/30min" variant="outline-dark" target="_blank">Meeting</Button>
                    </article>
                </Container>
            </section>
        </Container>

    )
}

export default IndexPage
