import React from 'react';


const HelloColor = props => {
    const styles = {
        backgroundColor: props.background,
        color: props.color
    }

    return(
        <div style={styles}>
            <h1>the word is: {props.hello} </h1>
        </div>
    )

}

export default HelloColor;
