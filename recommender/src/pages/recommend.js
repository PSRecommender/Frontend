import { useState } from "react";
import { Container } from "react-bootstrap";
import RecommendTable from "../components/recommendTable";
import axios from "axios";

function Recommend(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const userId = window.location.href.split("?")[1];
    console.log(userId)
    
    const getData = () => {
        axios.post("/recommend", {userId:userId})
        .then(function(response){
            if(typeof(response.data.result) === "number") setError(true);
            console.log(typeof(response.data.result));
            console.log(error)
            setData(response.data.result);   
        })
    }

    if(data === null) {
        getData();
    }
    return(
        error?
        <Container className="recommend" style={{"text-align":"center"}}>
            <h3>{data!==-1?data:"문제를 추천할 수 없습니다."}</h3>
        </Container>
        :
        <Container>
            <Container className="recommend mb-4" style={{"backgroundColor":"#DCEBFF", "padding":"20px"}}>
                <h5 className="mb-3">{userId}님의 학습레포트</h5>
                
            </Container>        

            <Container className="recommend mb-4" style={{"backgroundColor":"#DCEBFF", "padding":"20px"}}>
                <h5 className="mb-3">{userId}님의 학습 시퀀스 기반 추천 문제</h5>
                <RecommendTable data={data}></RecommendTable>
            </Container>
            
            <Container className="recommend" style={{"backgroundColor":"#DCEBFF", "padding":"20px"}}>
                <h5 className="mb-3">주요 알고리즘 추천 문제</h5>
                <RecommendTable data={data}></RecommendTable>
            </Container>
        </Container>
    )

}
export default Recommend;