import React from "react";
import Alert from 'react-bootstrap/Alert'

function Box1() {

    const [name] = React.useState("Adam Clarkson");

    return (
        <div className="box1">
            <Alert variant='primary'>
                <h1>{name}</h1>
            </Alert>
        </div>
    );

}

export default Box1;