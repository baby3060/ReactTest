import React from 'react';

const Login_child2 = ({match}) => {
    return(
        <div>
            <h5>{match.params.name}</h5>
        </div>
    );
}

export default Login_child2;