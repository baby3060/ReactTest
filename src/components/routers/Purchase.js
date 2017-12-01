import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

const Purchase = (props) => {
    return (
        <div>
            {
                !props.logFlag && <Redirect to="/login"/>
            }
        
            <h6>구매 페이지</h6>
        </div>
    );
}

export default Purchase;