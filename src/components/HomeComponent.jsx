import React, {useState} from 'react';
import Axios from 'axios';


const HomeComponent = props => {
    
    return (
        <div>
            <p> Welcome {props.num}</p>
        </div>
    )

}

export default HomeComponent;
