import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

var data2;

function SetData2() {
    data2 = [
                {
                    "id" : 1,
                    "name":"Foo",
                    "age":"20"
                },
                {
                    "id" : 2,
                    "name":"Bar",
                    "age":"30"
                },
                {
                    "id":3,
                    "name":"Baz",
                    "age":"40"
                }
            ];
}

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
                <p date-myattribute="somevalue">This is the Content!!!</p>
                <JSCal first="120" />
                <TBTest IdThText="Id" NaThText="NAME" />
                <h4>{this.props.h4Text}</h4>
                <PropEx />
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



class TBTest extends React.Component {
    constructor(){
        super();
        this.state = {
            data : data2
        }
    }
    render() {
        var thStyle = {
            fontSize : '12',
            backgroundColor : 'yellow',
            color : 'red',
            width : '140px'
        }
        return(
            <table border="1">
               <thead>
                    <tr>
                        <th style={thStyle}>{this.props.IdThText}</th>
                        <th style={thStyle}>{this.props.NaThText}</th>
                        <th style={thStyle}>{this.props.AgThText}</th>
                    </tr>
               </thead>
               
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
               
            </table>
        );
    }
}


TBTest.defaultProps = {
    IdThText : "Id",
    NaThText : "NAME",
    AgThText : "나이",
}

class TableRow extends React.Component {
    render() {
        return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
    }
}

class PropEx extends React.Component {
    render() {
        
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h3>Array : {this.props.propArray}</h3>
                <h3>Bool : {this.props.propBool?"True..":"False..."}</h3>
                <h3>Func : {this.props.propFunc(3)}</h3>
                <h3>Number : {this.props.propNumber}</h3>
                <h3>String : {this.props.propString}</h3>
            </div>
        );
    }
}

PropEx.propTypes = {
    name: PropTypes.string,
    propArray : PropTypes.array.isRequired,
    propBool : PropTypes.bool.isRequired,
    propFunc : PropTypes.func,
    propNumber : PropTypes.number,
    propString: PropTypes.string
};

PropEx.defaultProps = {
    name : 'Tutorialspoint.com',
    propArray : [1, 2, 3, 4, 5],
    propBool : true,
    propFunc : function(e) {
        return e
    },
    propNumber : 1,
    propString : "String value..."
}

SetData2();
export default App;