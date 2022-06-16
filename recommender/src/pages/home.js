import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll"
import {Button, Container, Form, Row, Col, Spinner} from "react-bootstrap";
import axios from "axios";

function Home(){
    const [validated, setValidated] = useState(false);
    const [validId, setValidId] = useState(false);
    const [userId, setUserId] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if(form.checkValidity() === false){
            e.stopPropagation();
        }
        setValidated(true);
        setLoading(true);
        axios.get("/valid?userId="+userId)
        .then(function(response){
            console.log(response.data.response_code)
            if(response.data.response_code == 200){
                setValidId(true);
                navigate("/recommend?"+userId, {state:{userId:userId}});
            }
            else if(response.data.response_code < 0){
                alert("푼 문제가 없어 문제를 추천할 수 없습니다.")
            }
            else alert("아이디가 맞지 않습니다.");
            setLoading(false);
        })
    }

    const handleChange = (e) => {
        setUserId(e.target.value)
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
                <section className="features-icons text-center py-0">
                    <div className="container">
                        <div className="row my-2">
                            <Link to="1" spy={true} smooth={true} className="col" style={{"border":"1px #E0EBFF solid", "backgroundColor":"#E0EBFF", "paddingTop":"150px", "paddingBottom":"150px", "width":"33%", "userSelect":"none", "marginRight":"0.5%"}}>
                                <div className="features-icons-item mx-auto">
                                    <h3>문제 추천</h3>
                                    <p className="lead mb-0">Recommend algorithm problem.</p>
                                </div>
                            </Link>
                            <Link to="2" spy={true} smooth={true} className="col" style={{"border":"1px #E0EBFF solid", "backgroundColor":"#E0EBFF", "paddingTop":"150px", "paddingBottom":"150px", "width":"33%", "userSelect":"none", "marginRight":"0.5%"}}>                               
                                    <div className="features-icons-item mx-auto">
                                        <h3>학습 레포트</h3>
                                        <p className="lead mb-0">Provide report.</p>
                                    </div>                            
                            </Link>
                            <Link to="3" spy={true} smooth={true} className="col" style={{"border":"1px #E0EBFF solid", "backgroundColor":"#E0EBFF", "paddingTop":"150px", "paddingBottom":"150px", "width":"33%", "userSelect":"none"}}>                                
                                    <div className="features-icons-item mx-auto">
                                        <h3>간편한 사용</h3>
                                        <p className="lead mb-0">Easy to use.</p>
                                    </div>                        
                            </Link>
                        </div>
                    </div>
                </section>
                
                <section className="showcase mb-5" style={{"backgroundColor":"#EBF5FF"}}>
                    <div className="container-fluid p-0">
                        <div className="row g-0" id="1">
                            <div className="col-lg-6 order-lg-2 text-white showcase-img showcase-img1" ></div>
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>문제 추천</h2>
                                <p className="lead mb-0">사용자의 알고리즘 학습 시퀀스 기반 추천 문제와 코딩 테스트 주요 알고리즘 유형 별 추천 문제를 제공합니다.</p>
                            </div>
                        </div>
                        <div className="row g-0" id="2">
                            <div className="col-lg-6 text-white showcase-img showcase-img2" ></div>
                            <div className="col-lg-6 my-auto showcase-text">
                                <h2>학습 레포트</h2>
                                <p className="lead mb-0">최근 푼 100문제에 대해 가장 많이 푼 알고리즘 유형 10개의 레벨 별 푼 문제 수를 그래프로 보여줍니다.</p>
                            </div>
                        </div>
                        <div className="row g-0" id="3">
                            <div className="col-lg-6 order-lg-2 text-white showcase-img showcase-img3" ></div>
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
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