import { Container, Button, Table } from 'react-bootstrap'
import icon from '../../img/icon.png'
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
                        <p>FullStack Developer</p>
                        <Button href="https://www.linkedin.com/in/cristian-perdomo-parra/" variant="outline-light">Linkedin</Button>
                        <br />
                        <Button href='https://github.com/ferbperdomo' variant="outline-light">Github</Button>
                    </article>

                </Container>
                <Container>
                    <article className='icon'>
                        <img src={icon} alt="icon floating" />
                    </article>
                </Container>
            </section>

            <section id='about'>
                <Container>
                    <article className='about-me'>
                        <h2>About me</h2>
                        <p>I am a fullstack developer with a passion for learning and creating.</p>
                        <p>
                            After four years of teaching, I decided to decode my mind and recode it to be a developer. Now, I take advantage of my background and I see myself a strong communicator, adaptable, patient and, of course, a tech enthusiast.
                        </p>
                        <p>
                            I’ll help you translate your amazing and complex ideas into code while using JavaScript and MERN Stack, but always open to learn new things.
                        </p>
                    </article>
                    <hr />
                    <figure className='mern'>
                        <h2>Tech me</h2>
                        <img src={mern} alt="MERN stack" />

                    </figure>

                </Container>
            </section>

            <section id='tech'>
                <Container>
                    <Table striped borderless>
                        <thead>
                            <tr>
                                <th>Frontend</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HTML5</td>
                                <td>CSS3</td>
                                <td>JavaScript</td>
                                <td>React</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Backend</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mongo</td>
                                <td>Express</td>
                                <td>Node</td>
                                <td>Mongoose</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </section>
        </>

    )
}

export default IndexPage