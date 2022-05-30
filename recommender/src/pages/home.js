import { useState } from "react";
import {Button, Container, Form, Row, Col, Spinner} from "react-bootstrap";
import axios from "axios";

function Home(){
    const [validated, setValidated] = useState(false);
    const [validId, setValidId] = useState(false);
    const [id, setId] = useState();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if(form.checkValidity() === false){
            e.stopPropagation();
        }
        setValidated(true);
        setLoading(true);
        axios.get("/valid?userId="+id)
        .then(function(response){
            if(response.data.response_code == 200){
                setValidId(true);
                window.location.href = "/recommend?" + id;
            }
            else if(response.data.response_code < 0){
                alert("푼 문제가 없어 문제를 추천할 수 없습니다.")
            }
            else alert("아이디가 맞지 않습니다.");
            setLoading(false);
        })
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
                                    <h1 className="mb-5">알고리즘 문제 추천</h1>
                                    <Form validated={validated && validId} onSubmit={handleSubmit}>
                                        <Row>
                                            <Col>
                                                <Form.Control size="lg" required type="text" placeholder="백준 아이디" onChange={handleChange}></Form.Control>
                                            </Col>
                                            <Col md={"auto"}>
                                                {loading?
                                                <Button size="lg" id="submitButton" disabled>
                                                    <Spinner 
                                                        as="span"
                                                        animation="border"
                                                        role="status"
                                                        size="sm"
                                                        aria-hidden="true">
                                                    </Spinner>
                                                </Button>:
                                                <Button size="lg" id="submitButton" type="submit">Submit</Button>}
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
                                    <p class="lead mb-0">Recommend algorithm problem.</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <h3>학습 레포트</h3>
                                    <p class="lead mb-0">Provide report.</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                    <h3>간편한 사용</h3>
                                    <p class="lead mb-0">Easy to use.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="showcase">
                    <div class="container-fluid p-0">
                        <div class="row g-0">
                            <div class="col-lg-6 order-lg-2 text-white showcase-img showcase-img1" ></div>
                            <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>문제 추천</h2>
                                <p class="lead mb-0">백준 아이디를 입력하면 알고리즘 학습 시퀀스를 기반으로 코딩 테스트 관련 알고리즘 문제를 추천해줍니다.</p>
                            </div>
                        </div>
                        <div class="row g-0">
                            <div class="col-lg-6 text-white showcase-img showcase-img2" ></div>
                            <div class="col-lg-6 my-auto showcase-text">
                                <h2>학습 레포트</h2>
                                <p class="lead mb-0">알고리즘 유형 및 레벨 별 푼 문제 수를 그래프로 보여줍니다.</p>
                            </div>
                        </div>
                        <div class="row g-0">
                            <div class="col-lg-6 order-lg-2 text-white showcase-img showcase-img3" ></div>
                            <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>간편한 사용</h2>
                                <p className="lead mb-0">백준 아이디 입력만으로 모든 서비스를 이용 가능합니다.</p>
                            </div>
                        </div>
                    </div>
                </section>
        </Container>
            
    );

}

export default Home