import React from "react";
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Box2(props) {

    // const [name, setName] = React.useState(props.name);
    const [age, setAge] = React.useState(props.age);
    // const [color, setColor] = React.useState(props.color);

    return (

            <Col className="box2" onClick={()=> setAge(age+1)}>
                <Card>
                    <Card.Body>
                        <Card.Title>Name: {props.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">I am {age} year{age===1 ? '' : 's'} old</Card.Subtitle>
                        <Card.Text>
                            The coolest color is <span style={{ color: props.color }}><strong>{props.color}</strong></span>!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

    );

}

export default Box2;