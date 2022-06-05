import { Container } from "react-bootstrap";

function NotFound(){

    return(
        <Container className="recommend mt-5" style={{"text-align":"center"}}>
            <h1>404</h1>
            존재하지 않는 페이지입니다.
        </Container>
    )

}
export default NotFound;