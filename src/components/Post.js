import React from "react";

function Post(props) {

    const [number, setNumber] = React.useState(props.start);

    return (
        <div className="post" onClick={()=> setNumber(number+1)}>
            <h1>{props.text}: {number}</h1>
        </div>
    )
}
export default Post;