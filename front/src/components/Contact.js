import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img-resized.png";
import errorImg from "../assets/img/error.png";
import successImg from "../assets/img/success.png";
import "animate.css";

export const Contact = () => {
    const [isFirstNameError, setIsFirstNameError] = useState(false);
    const [isLastNameError, setIsLastNameError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isContentError, setIsContentError] = useState(false);
    const [buttonText, setButtonText] = useState("Send");
    const [errorMessage, setErrorMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        content: '',
    });
    const [isSubmit, setIsSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isSubmit) {
            const re =
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

            const firstNameError = formData.firstName.trim() === "";
            const lastNameError = formData.lastName.trim() === "";
            const emailError = formData.email.trim() === "" || !re.test(formData.email);
            const contentError = formData.content.trim() === "";

            setIsFirstNameError(firstNameError);
            setIsLastNameError(lastNameError);
            setIsEmailError(emailError);
            setIsContentError(contentError);

            const valid = !firstNameError && !lastNameError && !emailError && !contentError;
            setErrorMessage(!valid);

            setButtonText(valid ? "Send" : "Error !!");
        }
    }, [formData.firstName, formData.lastName, formData.email, formData.content, isSubmit]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isValidate = () => {
        const re =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        const firstNameError = formData.firstName.trim() === "";
        const lastNameError = formData.lastName.trim() === "";
        const emailError = formData.email.trim() === "" || !re.test(formData.email);
        const contentError = formData.content.trim() === "";

        setIsFirstNameError(firstNameError);
        setIsLastNameError(lastNameError);
        setIsEmailError(emailError);
        setIsContentError(contentError);

        const valid = !firstNameError && !lastNameError && !emailError && !contentError;
        setErrorMessage(!valid);

        setButtonText(valid ? "Send" : "Error !!");

        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        if (!isValidate()) {
            setButtonText("Error !!");
            return;
        }
        setErrorMessage(false);
        setIsLoading(true);
        const response = await fetch("https://api.erdemzkn.me/api/mail", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        });
        setIsLoading(false);
        if (response.status === 201) {
            setSuccessMessage(true);
            setButtonText("Success !!");
            setFormData({ firstName: '', lastName: '', email: '', content: '' });
            setIsSubmit(false);
        }
        else if (response.status === 400) {
            setErrorMessage(true);
            setButtonText("400 Error !!");
        }
        else {
            setErrorMessage(true);
            setIsEmailError(true);
            setButtonText("No More Email !!");
        }
    };

    const getImageClass = () => {
        if (successMessage) {
            return "error-success-img animate__animated animate__fadeInLeftBig";
        } else if (errorMessage) {
            return "error-success-img animate__animated animate__fadeInLeftBig";
        } else {
            return "contact-img animate__animated animate__fadeInLeftBig";
        }
    };

    const getImage = () => {
        if (successMessage) {
            return successImg;
        } else if (errorMessage) {
            return errorImg;
        } else {
            return contactImg;
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <img
                                className={`${getImageClass()} ${isVisible ? "animate__animated animate__fadeInLeftBig" : ""}`}
                                    src={getImage()}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form
                                        onSubmit={successMessage ? null : handleSubmit}
                                        className={errorMessage ? "animate__animated animate__shakeX" : ""}
                                    >
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    className={(successMessage) ? "success-input" : (isFirstNameError) ? "error-input" : ""}
                                                    placeholder="First Name"
                                                    onChange={handleInputChange}
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    className={(successMessage) ? "success-input" : (isLastNameError) ? "error-input" : ""}
                                                    placeholder="Last Name"
                                                    onChange={handleInputChange}
                                                />
                                            </Col>
                                            <Col xl={12} md={12} sm={12} className="px-1">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    className={(successMessage) ? "success-input" : (isEmailError) ? "error-input" : ""}
                                                    placeholder="Email Address"
                                                    onChange={handleInputChange}
                                                />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea
                                                    rows="6"
                                                    name="content"
                                                    className={(successMessage) ? "success-input" : (isContentError) ? "error-input" : ""}
                                                    placeholder="Message"
                                                    onChange={handleInputChange}
                                                ></textarea>
                                                <button
                                                    type="submit"
                                                    className={successMessage ? "success-button" : errorMessage ? "disable" : ""}
                                                    disabled={isLoading}
                                                >
                                                    <span>{isLoading ? "Sending..." : buttonText}</span>
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};