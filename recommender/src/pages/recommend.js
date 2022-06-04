import { useState } from "react";
import { Container } from "react-bootstrap";
import RecommendTable from "../components/recommendTable";
import MyResponsiveBar from "../components/myResponsiveBar";
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
    const reportData = 
                        [
                            {
                            "tag": "구현",
                            "Bronze": 182,
                            "Silver": 49,
                            "Gold": 199,
                            "Platinum": 173,
                            },
                            {
                            "tag": "다이나믹",
                            "Bronze": 70,
                            "Silver": 8,
                            "Gold": 15,
                            "Platinum": 107,
                            },
                            {
                            "tag": "자료구조",
                            "Bronze": 172,
                            "Silver": 173,
                            "Gold": 30,
                            "Platinum": 64,
                            },
                            {
                            "tag": "문자열",
                            "Bronze": 156,
                            "Silver": 149,
                            "Gold": 104,
                            "Platinum": 121,
                            },
                            {
                            "tag": "그리디",
                            "Bronze": 53,
                            "Silver": 25,
                            "Gold": 124,
                            "Platinum": 76,
                            },
                            {
                            "tag": "브루투포스",
                            "Bronze": 156,
                            "Silver": 148,
                            "Gold": 153,
                            "Platinum": 159,
                            },
                            {
                            "tag": "정렬",
                            "Bronze": 88,
                            "Silver": 33,
                            "Gold": 32,
                            "Platinum": 145,
                            },
                            {
                            "tag": "이진탐색",
                            "Bronze": 88,
                            "Silver": 33,
                            "Gold": 32,
                            "Platinum": 145,
                            },
                            {
                            "tag": "너비우선탐색",
                            "Bronze": 88,
                            "Silver": 33,
                            "Gold": 32,
                            "Platinum": 145,
                            },
                            {
                            "tag": "집합과 맵을 사용한 해싱",
                            "Bronze": 88,
                            "Silver": 33,
                            "Gold": 32,
                            "Platinum": 145,
                            },
                        ]

    return(
        error?
        <Container className="recommend" style={{"text-align":"center"}}>
            <h3>{data!==-1?data:"문제를 추천할 수 없습니다."}</h3>
        </Container>
        :
        <Container>
            <Container className="recommend mb-4" style={{"backgroundColor":"#EBF5FF", "padding":"20px"}}>
                <h5 className="mb-4">{userId}님의 학습레포트</h5>
                <MyResponsiveBar data={reportData}></MyResponsiveBar>
            </Container>        

            <Container className="recommend mb-4" style={{"backgroundColor":"#EBF5FF", "padding":"20px"}}>
                <h5 className="mb-4">{userId}님의 학습 시퀀스 기반 추천 문제</h5>
                <RecommendTable data={data}></RecommendTable>
            </Container>
            
            <Container className="recommend mb-4" style={{"backgroundColor":"#EBF5FF", "padding":"20px"}}>
                <h5 className="mb-4">주요 알고리즘 추천 문제</h5>
                <RecommendTable data={data}></RecommendTable>
            </Container>
        </Container>
    )

}
export default Recommend;