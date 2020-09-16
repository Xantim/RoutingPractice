import React, {useState} from 'react';
import Axios from 'axios';


const Thing = props => {
    if(isNaN(props.thing) == true) {
        return(
            <div>
                <p>The word is: {props.thing}</p>
            </div> 
        );           
    }
    if(isNaN(props.thing) == false) {
        return(
            <div>
                <p>The number is: {props.thing}</p>
            </div>
        )
    }
}

export default Thing;