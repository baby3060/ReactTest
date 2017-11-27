import React from 'react';
import stUpdate from 'react-addons-update';
import PropTypes from 'prop-types';

class TBManager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            UserData : [
                {
                    "id" : "1",
                    "name":"Foo",
                    "age": 20
                },
                {
                    "id" : "23",
                    "name":"Bar",
                    "age": 30
                },
                {
                    "id": "3",
                    "name":"Baz",
                    "age": 40
                }
            ],
            selectedKey : -1
        }
    }
    
    P_selectUser(key) {
        if(key == this.state.selectedKey) {
           this.setState({
                selectedKey : -1   
           });
        return;
        }
        
        this.setState({
            selectedKey : key
        });
    }
    
    
    p_insertUser(id, name, age) {
        
        let newState = stUpdate(
                           this.state
                         , {
                                UserData : {
                                    $push : [{"id" : id, "name" : name, "age" : age}]
                                }
                                , selectedKey : {
                                    $set : [-1]
                                }
                             
                            }
                        );
        this.setState(newState);
    }
    
    f_isSelected_U(key) {
        if( this.state.selectedKey == key ) {
            return true;
        } else {
            return false;
        }
    }
    
    render() {
        let thStyle = {
            fontSize : '12',
            backgroundColor : 'yellow',
            color : 'red',
            width : '140px'
        }
        let mTop = {
            marginTop : '15px'
        }
        return (
            <div>
                <RowCreator onInsert={this.p_insertUser.bind(this)} />
                
                <div style={mTop}>
                    <table border="1">
                       <thead>
                            <tr>
                                <th style={thStyle}>{this.props.IdThText}</th>
                                <th style={thStyle}>{this.props.NaThText}</th>
                                <th style={thStyle}>{this.props.AgThText}</th>
                            </tr>
                       </thead>
                       <tbody>
                             {this.state.UserData.map((person, i) => 
                                                      <TableRow key = {i} 
                                                                data = {person} 
                                                                isSelected={this.f_isSelected_U.bind(this)(i)}
                                                                onSelUser={this.P_selectUser.bind(this)}
                                                                userKey={i}
                                                        />)}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}


TBManager.defaultProps = {
    IdThText : "Id",
    NaThText : "NAME",
    AgThText : "나이"
}

class TableRow extends React.Component {
    tr_Click() {
        this.props.onSelUser(this.props.userKey);
    }
    
    render() {
        let getStyle = (isSelect) => {
            if(!isSelect) return;
            let style = {
                backgroundColor : 'red',
                color : 'blue'
            };
            
            return style;
        };
        
        return (
         <tr style={getStyle(this.props.isSelected)}
             onClick={this.tr_Click.bind(this)}
           >
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
    }
}

class RowCreator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id : "",
            name : "",
            age : 0
        }
        
        this.setObjValue = this.setObjValue.bind(this);
        
    }
    
    setObjValue(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    
    AddBtnClick() {
        
        let idVal = (this.state.id != "");
        let nameVal = (this.state.name != "");
        let ageVal = false;
        
        let ageStr = (this.state.age == '')?"0":this.state.age + "";
        ageVal =(parseInt(ageStr) > 0);
        
        let isIn = idVal && nameVal && ageVal;
        
        if(isIn) {
            this.props.onInsert(this.state.id, this.state.name, this.state.age);
            this.setState({
                id : "",
                name : "",
                age : 0
            });
        } else {
            if( !idVal ) {
               alert("ID 를 입력바랍니다.");
            } else if(!nameVal) {
                alert("Name을 입력바랍니다.");
            } else {
                alert("age를 입력바랍니다.");
            }
            return;
        }
    }
    
    render() {
        return (
            <div>
                <input type="text" name="id" placeholder="Id" 
                       value={this.state.id}
                       onChange={this.setObjValue}
                    />
                <input type="text" name="name" placeholder="Name" 
                        value={this.state.name}
                        onChange={this.setObjValue}
                    />
                <input type="text" name="age" placeholder="Age" 
                        value={this.state.age}
                        onChange={this.setObjValue}
                    />
                <button
                    onClick={this.AddBtnClick.bind(this)}
                    >
                    Add User
                </button>
            </div>
        );
    }
}


RowCreator.propTypes = {
    id: PropTypes.string,
    name : PropTypes.string,
    age : PropTypes.number
};


export default TBManager;