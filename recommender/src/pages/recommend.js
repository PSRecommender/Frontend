import { useState } from "react";
import { Container } from "react-bootstrap";
import RecommendTable from "../components/recommendTable";
import axios from "axios";

function Recommend(){
    const [data, setData] = useState(null);
    
    const getData = () => {
        let userId = window.location.href.split("?")[1];
        axios.post("/recommend", {userId:userId})
        .then(function(response){
            setData(response.data);
        })
    }

    if(data === null) {
        getData();
    }
    return(
        <Container className="recommend mt-5">
            <h5 className="mb-3">추천 문제</h5>
            <RecommendTable data={data}></RecommendTable>
        </Container>
    )

}
export default Recommend;