import { Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-card wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                I am actively working on projects involving web development, deep learning, computer vision, and data analysis. I have hands-on experience with YOLO, OCR, and gaze detection techniques, particularly in video processing and real-time object detection. I have also worked with digital image processing and AI-based solutions to analyze and extract meaningful insights from visual data.
                            </p>
                            <Row className="d-flex align-items-center mt-5">
                                <Col>
                                    <div className="skill-box">
                                        <div className="icon">
                                            <i className="fab fa-sass"></i>
                                        </div>
                                        <h3>.NET</h3>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="skill-box">
                                        <div className="icon">
                                            <i className="fab fa-bootstrap"></i>
                                        </div>
                                        <h3>Spring Boot</h3>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="skill-box">
                                        <div className="icon">
                                            <i className="fab fa-git"></i>
                                        </div>
                                        <h3>Angular</h3>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="skill-box">
                                        <div className="icon">
                                            <i className="fab fa-github"></i>
                                        </div>
                                        <h3>React</h3>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-flex align-items-center mt-5">
                                <Col>
                                    <div className="skill-box">
                                        <div className="icon">
                                            <i className="fab fa-js"></i>
                                        </div>
                                        <h3>AWS</h3>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="skill-box">
                                        <div className="icon">
                                            <i className="fab fa-node-js"></i>
                                        </div>
                                        <h3>OpenCV</h3>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="skill-box">
                                        <div className="icon">
                                            <i className="fab fa-node-js"></i>
                                        </div>
                                        <h3>Tensorflow</h3>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
