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
                    "id" : 23,
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

SetData2();
export default TBTest;