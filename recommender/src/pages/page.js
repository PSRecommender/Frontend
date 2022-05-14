import { Container } from "react-bootstrap";
import {Routes, Route} from 'react-router-dom';
import Header from "../components/header";
import Home from "./home";
import Recommend from "./recommend";

function Page(){
    return(
        <Container>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>} exact></Route>
                <Route path="/recommend" element={<Recommend></Recommend>}></Route>
            </Routes>
        </Container>
    )
}

export default Page;