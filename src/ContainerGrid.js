import Counter from './Counter';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function ContainerGrid() {
    const [valCounter, setValCounter] = useState(0)

    function interactionCounter(reset, value) {
    value++;
    if(reset){
        value = 0;
    }
    setValCounter(value);
    }

    return ( 
        <>
            <Container fluid>
                <Row>
                    <Col> <Counter value={valCounter} ></Counter></Col> 
                    <Col> <Button onClick = {() => interactionCounter(false, valCounter)} > Click </Button>  </Col> 
                    <Col> <Button onClick = {() => interactionCounter(true, valCounter)} > Reset </Button>  </Col> 
                </Row> 
            </Container> 
        </>
    );
}

export default ContainerGrid;