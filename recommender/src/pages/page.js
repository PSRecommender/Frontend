import { Container } from "react-bootstrap";
import {Routes, Route} from 'react-router-dom';
import Header from "../components/header";
import Home from "./home";
import NotFound from "./notfound";
import Recommend from "./recommend";

function Page(){
    return(
        <Container>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>} exact></Route>
                <Route path="/recommend" element={<Recommend></Recommend>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </Container>
    )
}

export default Page;