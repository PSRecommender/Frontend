import { ResponsiveBar } from "@nivo/bar"
import { Container,Spinner,Col,Row } from "react-bootstrap";

function MyResponsiveBar(props){
    if(props.data!=null){
        let data = props.data;
        console.log(data);
        return(
            <Container style={{'height':'500px'}}>
                <ResponsiveBar
                    data={data}
                    keys={[
                        'Bronze',
                        'Silver',
                        'Gold',
                        'Platinum',
                    ]}
                    indexBy="tag"
                    margin={{ top: 10, right: 130, bottom: 60, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={['#F4A460', '#64AAFF', '#FFE65A', '#7FFFD4']}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                1.6
                            ]
                        ]
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -15,
                        legend: '태그',
                        legendPosition: 'middle',
                        legendOffset: 50
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '문제 수',
                        legendPosition: 'middle',
                        legendOffset: -50
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                1.6
                            ]
                        ]
                    }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1,
                                    }
                                }
                            ]
                        }
                    ]}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
                ></ResponsiveBar>
            </Container> 
        )

    }else{
        return(
            <Container>
                <Row className="mb-3">
                    <Col></Col>
                    <Spinner animation="border"></Spinner>
                    <Col></Col>
                </Row>
            </Container>
        );
    }

}

export default MyResponsiveBar;