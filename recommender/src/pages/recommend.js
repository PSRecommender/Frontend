import { useState } from "react";
import { Container } from "react-bootstrap";
import RecommendTable from "../components/recommendTable";
import axios from "axios";

function Recommend(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    
    const getData = () => {
        let userId = window.location.href.split("?")[1];
        axios.post("/recommend", {userId:userId})
        .then(function(response){
            if(typeof(response.data.result) === "number") setError(true);
            else setError(false)
            console.log(typeof(response.data.result));
            console.log(error)
            setData(response.data.result);   
        })
    }

    if(data === null) {
        getData();
    }
    return(
        (error || error===null)?
        <Container className="recommend mt-5" style={{"text-align":"center"}}>
            <h1>{data!==-1?data:"문제를 추천할 수 없습니다."}</h1>
        </Container>
        :
        <Container className="recommend mt-5">
            <h5 className="mb-3">추천 문제</h5>
            <RecommendTable data={data}></RecommendTable>
        </Container>
    )

}
export default Recommend;