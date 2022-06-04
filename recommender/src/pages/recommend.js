import { useState } from "react";
import { Container } from "react-bootstrap";
import RecommendTable from "../components/recommendTable";
import MyResponsiveBar from "../components/myResponsiveBar";
import axios from "axios";

function Recommend(){
    const [status, setStatus] = useState(null);
    const [dataA, setDataA] = useState(null);
    const [dataB, setDataB] = useState(null);
    const [reportData, setReportData] = useState(null);
    const [error, setError] = useState(false);

    const userId = window.location.href.split("?")[1];
    console.log(userId)
    
    const getData = () => {
        axios.post("/recommend", {userId:userId})
        .then(function(response){
            if(response.data.status !== 200) {
                setError(true);
                setStatus(response.data.status);
            }else{
                setStatus(response.data.status);
                setDataA(response.data.recommendA); 
                setDataB(response.data.recommendB);
                setReportData(response.data.report);
            }
            console.log(response.data.status);
            console.log(error);

        })
    }

    if(status === null) {
        getData();
    }
    return(
        error?
        <Container className="recommend" style={{"text-align":"center"}}>
            <h3>{status!==-1?status:"문제를 추천할 수 없습니다."}</h3>
        </Container>
        :
        <Container>
            <Container className="recommend mb-4" style={{"backgroundColor":"#EBF5FF", "padding":"20px"}}>
                <h5 className="mb-4">{userId}님의 학습레포트</h5>
                <MyResponsiveBar data={reportData}></MyResponsiveBar>
            </Container>        

            <Container className="recommend mb-4" style={{"backgroundColor":"#EBF5FF", "padding":"20px"}}>
                <h5 className="mb-4">{userId}님의 학습 시퀀스 기반 추천 문제</h5>
                <RecommendTable data={dataA}></RecommendTable>
            </Container>
            
            <Container className="recommend mb-4" style={{"backgroundColor":"#EBF5FF", "padding":"20px"}}>
                <h5 className="mb-4">주요 알고리즘 추천 문제</h5>
                <RecommendTable data={dataB}></RecommendTable>
            </Container>
        </Container>
    )

}
export default Recommend;