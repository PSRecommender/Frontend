import { Container, Spinner, Table, Row, Col } from "react-bootstrap";

function RecommendTable(props){
    if(props.data!==null) {
        console.log("props" + props.data);
        let problems = props.data;
        let list = []
        for(let i = 0;i<problems.length;i++){
            let problem = problems[i];
            let tags = problem.tags;
            let tagList = [];
            for(let j = 0;j<tags.length-1;j++){
                let tag = tags[j];
                tagList.push(<a href={tag.url}>{tag.tagName}</a>)
                tagList.push(", ") 
            }
            let tag = tags[tags.length-1];
            tagList.push(<a href={tag.url}>{tag.tagName}</a>)
            list.push(
                <tr key={i}>
                    <td><a href={problem.url}>{problem.pId}</a></td>
                    <td><a href={problem.url}>{problem.title}</a></td>
                    <td>{tagList}</td>
                    <td>{problem.level}</td>
                </tr>
            )
        }
        return(
            <Container>
                <Table hover>
                    <thead>
                        <tr className="recommend">
                            <th>문제번호</th>
                            <th>제목</th>
                            <th>태그</th>
                            <th>레벨</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </Table>
            </Container>
        )
    }else{
        return(
            <Container>
            <Table hover className="mb-3">
                <thead>
                    <tr className="recommend">
                        <th>문제번호</th>
                        <th>제목</th>
                        <th>태그</th>
                        <th>레벨</th>
                    </tr>
                </thead>
            </Table>
            <Row className="mb-3">
                <Col></Col>
                <Spinner animation="border"></Spinner>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                문제를 가져오는 중입니다.
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                처음 서비스를 이용하신다면 시간이 걸릴 수 있습니다. 잠시만 기다려 주세요.
                <Col></Col>
            </Row> 
        </Container>
        );
    }
    
}
export default RecommendTable;