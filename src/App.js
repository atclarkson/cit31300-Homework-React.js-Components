import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from "./components/navi/Navi";
import Box1 from "./components/boxes/Box1";
import Box2 from "./components/boxes/Box2";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <div className="App">
        <Container>
        <Navi/>
        <Box1/>
            <Row>
                <Box2 name={"Lillian"} age={4} color={"Pink"}/>
                <Box2 name={"Cora"} age={2} color={"Purple"}/>
                <Box2 name={"Harper"} age={0} color={"Green"}/>
            </Row>
        </Container>
    </div>
  );
}

export default App;
