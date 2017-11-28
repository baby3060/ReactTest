import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Form, FormGroup, Input, Button, Label } from 'reactstrap';

class RefTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : "",
            hello : ""
        }
        this.clearInput = this.clearInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    clearInput() {
        this.setState({
            data : "" ,
            hello : "Hello!!!"
        });
        this.inp_txt.value = "";
        ReactDOM.findDOMNode(this.inp_txt).focus();
    }
    
    handleChange(e) {
        let data_val = e.target.value.trim();
        
        let hello_val = "";
        if(data_val === '') {
           hello_val = "Anonymous님 Hello!!!";
        } else {
            hello_val = data_val + "님 HelloWorld!!!";
        }
        
        this.setState({
            data : e.target.value,
            hello : hello_val
        });
        
    }
    
    componentDidMount() {
        this.inp_txt.value = "";
        this.hello.value = "Anonymous님 Hello!!!";
    }

    render() {
        return(
            <div>
                <input ref={ref => this.inp_txt = ref}
                    onChange={this.handleChange}
                    ></input>
                <Button color="info"
                    onClick={this.clearInput}
                >
                Clear Val
                </Button>
                <input type="text" ref={ref => this.hello = ref} readOnly
                    value={this.state.hello}
                ></input>
            </div>
        )
    };
    
}

export default RefTest;