import { Container, Button } from 'react-bootstrap'
import '../IndexPage/IndexPage.css'


const IndexPage = () => {


    return (
        <section id='hero'>
            <Container >
                <article className='introduction'>
                    <p>Hi! <img className='wavy-hand' src="https://media.tenor.com/images/30169e4a670daf12443df7d2dd140176/tenor.gif"></img> I am</p>
                    <p className='brand'>Cristian Perdomo.</p>
                    <p>FullStack Developer</p>
                    <Button href="https://www.linkedin.com/in/cristian-perdomo-parra/" variant="outline-light">Linkedin</Button>
                    <Button href='https://github.com/ferbperdomo' variant="outline-light">Github</Button>
                </article>

            </Container>
        </section>
    )
}

export default IndexPage