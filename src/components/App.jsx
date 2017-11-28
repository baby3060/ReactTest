import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import TBManager from './TBManager';
import PropEx from './PropEx';
import RefTest from './RefTest';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            header : "Header Text Showme",
            Content : "It is Content Text"
        }
        
    }
    render() {
        var myStyle = {
            fontSize : '15',
            color : '#FF0000'
        }
        return (
            <div>
                <h1 style={myStyle}>{this.state.header}</h1>
                <h2>{this.state.Content}</h2>
                <JSCal first="120" />
                <TBManager IdThText="Id" NaThText="NAME" />
                <h4>{this.props.h4Text}</h4>
                <PropEx propHolZZak="HOL" />
                <RefTest />
            </div>
        );
    }
}

App.propTypes = {
    h4Text: PropTypes.string
};

App.defaultProps = {
    h4Text : "이것은 Default 입니다."
}

class JSCal extends React.Component {
    render() {
        return (
            <p>{parseInt(this.props.first, 10) + 1}</p>
        );
    }
}

export default App;