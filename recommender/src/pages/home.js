import { useState } from "react";
import {Button, Container, Form, Row, Col} from "react-bootstrap";

function Home(){
    const [validated, setValidated] = useState(false);
    const [id, setId] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if(form.checkValidity() === false){
            e.stopPropagation();
        }
        setValidated(true);
        window.location.href = "/recommend?" + id;
    }

    const handleChange = (e) => {
        setId(e.target.value)
    }
    return(
        <Container>
            <header className="masthead">
                    <div className="container position-relative">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="text-center text-white">
                                    {/* <!-- Page heading--> */}
                                    <h1 className="mb-5">알고리즘 문제 추천</h1>
                                    {/* <!-- Signup form-->
                                    <!-- * * * * * * * * * * * * * * *-->
                                    <!-- * * SB Forms Contact Form * *-->
                                    <!-- * * * * * * * * * * * * * * *-->
                                    <!-- This form is pre-integrated with SB Forms.-->
                                    <!-- To make this form functional, sign up at-->
                                    <!-- https://startbootstrap.com/solution/contact-forms-->
                                    <!-- to get an API token!--> */}
                                    <Form validated={validated} onSubmit={handleSubmit}>
                                        <Row>
                                            <Col>
                                                <Form.Control size="lg" required type="text" placeholder="백준 아이디" onChange={handleChange}></Form.Control>
                                            </Col>
                                            <Col md={"auto"}>
                                                <Button size="lg" id="submitButton" type="submit">Submit</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section class="features-icons bg-light text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <h3>문제 추천</h3>
                                    <p class="lead mb-0">This theme will look great on any device, no matter the size!</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <h3>학습 레포트</h3>
                                    <p class="lead mb-0">Featuring the latest build of the new Bootstrap 5 framework!</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                    <h3>간편한 사용</h3>
                                    <p class="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Image Showcases--> */}
                <section class="showcase">
                    <div class="container-fluid p-0">
                        <div class="row g-0">
                            <div class="col-lg-6 order-lg-2 text-white showcase-img showcase-img1" ></div>
                            <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>문제 추천</h2>
                                <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                            </div>
                        </div>
                        <div class="row g-0">
                            <div class="col-lg-6 text-white showcase-img showcase-img2" ></div>
                            <div class="col-lg-6 my-auto showcase-text">
                                <h2>학습 레포트</h2>
                                <p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                            </div>
                        </div>
                        <div class="row g-0">
                            <div class="col-lg-6 order-lg-2 text-white showcase-img showcase-img3" ></div>
                            <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>간편한 사용</h2>
                                <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                            </div>
                        </div>
                    </div>
                </section>
        </Container>
            
    );

}

export default Home