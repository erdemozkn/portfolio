import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-logo.svg'
import TrackVisibility from 'react-on-screen';
import 'animate.css'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full-Stack", "Software", "Cloud", "Computer Vision"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const delay = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(delay);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={6} xl={7} className="text-clearity-modify">
                        <TrackVisibility>
                            {({ isVisible }) => <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="hero-text">Welcome to my website.</span>
                                <h1>Hi! I'm <br></br>Erdem Ozkan </h1>
                                <p>I am a highly motivated and <br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full-Stack", "Software", "Cloud", "Computer Vision" ]'><span className="wrap">{text}</span></span> developer with a passion for <br></br>creating
                                    innovative solutions. I am proficient in multiple programming languages including
                                    Python, Java, and C#, and have hands-on experience with frameworks and
                                    technologies such as .NET, Java Spring Boot, React, Angular, and NestJS. I have also
                                    worked extensively with cloud platforms such as Azure and AWS. My expertise extends
                                    to JavaScript and TypeScript, which allows me to develop robust and dynamic web
                                    applications.</p>
                                <button onClick={() => { console.log("connected") }}>Let's Connect <ArrowRightCircle size={25} /></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInRightBig" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}