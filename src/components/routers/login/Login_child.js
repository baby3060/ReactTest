import React from 'react';

class Login_child extends React.Component {
    constructor(props) {
        super(props);
    }
    
    onSaveEvent() {
        this.props.onSave();
    }
    
    render() {
        return(
            <div>
                <h5>{this.props.name}</h5>
                <button
                    onClick={this.onSaveEvent.bind(this)}
                >
                Login
                </button>
            </div>
        );
    }
    
}

export default Login_child;