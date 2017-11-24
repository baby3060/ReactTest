import React from 'react';

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
                <JSCal />
                <p></p>
                <TBTest />
            </div>
        );
    }
}

class JSCal extends React.Component {
    render() {
        return (
            <p>{ 1 + 1 }</p>
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
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Age</th>
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

SetData2();
export default App;