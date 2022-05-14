import { Container, Table } from "react-bootstrap";

function RecommendTable(props){
    if(props.data!==null) {
        console.log(props.data);
        let data = props.data;
        let problems = data.problemList;
        let list = []
        for(let i = 0;i<problems.length;i++){
            list.push(
                <tr key={i}>
                    <td><a href="https://www.acmicpc.net/problem/1234">{problems[i].id}</a></td>
                    <td>{problems[i].tag}</td>
                    <td>{problems[i].level}</td>
                </tr>
            )
        }
        return(
            <Container>
                <Table hover bordered>
                    <thead>
                        <tr>
                            <th>문제번호</th>
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
        return;
    }
    
}
export default RecommendTable;