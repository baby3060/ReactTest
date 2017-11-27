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
            selectedKey : -1,
            selectedUser : [
                "id" : "",
                "name" : "",
                "age" : 0
            ]
        }
    }
    
    p_insertUser(id, name, age) {
        
        this.setState({
            UserData : stUpdate(
                  this.state.UserData
                , {
                    $push : [{"id" : id, "name" : name, "age" : age}]    
                }
            )
          , selectedKey : -1
        });
        
        // Bad Update Way
        /* 
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
        */
    }
    
    f_isSelected_U(key) {
        if( this.state.selectedKey == key ) {
            return true;
        } else {
            return false;
        }
    }
    
    userRemove(){
        if(this.state.selectedKey == -1) {
            alert("User를 선택바랍니다.");
            return;  
        } 
        
        this.setState({
              UserData : stUpdate (
                 this.state.UserData
               , {  $splice : [[this.state.selectedKey, 1]] }
              )
            , selectedKey : -1
        });
        
    }
    
    UserSelected(key) {
        if( this.state.selectedKey == key ) {
            // 다시 누를 경우 취소
            this.setState({
                selectedUser : stUpdate (
                    this.state.selectedUser
                  , {
                       id : {$set : ""},
                       name : {$set : ""},
                       age  : {$set : "0"}
                    }
                ), selectedKey : -1
            });
            
            return;
        } else {
            this.setState({
                 selectedUser : this.state.UserData[key]
                , selectedKey : key
            });
        }
    }
    
    p_ModifyUser(id, name, age) {
        this.setState({
            UserData : stUpdate(
                this.state.UserData,
                {
                    [this.state.selectedKey] : {
                        id : {$set : id},
                        name : {$set : name},
                        age : {$set : age}
                    }
                }
            ),
            selectedUser : stUpdate(
                this.state.selectedUser,
                {
                    id : {$set : id},
                    name : {$set : name},
                    age : {$set : age}
                }
            )
        });
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
                                                                onSelUser={this.UserSelected.bind(this)}
                                                                userKey={i}
                                                        />)}
                        </tbody>

                    </table>
                </div>
                <RowRemover userRemove={this.userRemove.bind(this)}
                            selectedKey={this.state.selectedKey}
                            />

                <RowSelector isSelected={(this.state.selectedKey != -1)}
                            onSelect={this.UserSelected.bind(this)}
                            selUser={this.state.selectedUser}
                            onModify={this.p_ModifyUser.bind(this)}
                             />
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

class RowRemover extends React.Component {
    remove_click() {
        this.props.userRemove();
    }
    
    render() {
        let visiStyle = keyIndex => {
            let style = {};
            
            if( keyIndex == -1 ) {
                style = { visibility : 'hidden' }
            } else {
                style = { visibility : 'visible' }
            }
            return style;
        };
        
        return(
            <button style={ visiStyle(this.props.selectedKey) }
                    onClick={this.remove_click.bind(this)}>
                User Delete
            </button>
        );
    }
}

class RowSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : "",
            name : "",
            age : 0
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            id : nextProps.selUser.id,
            name : nextProps.selUser.name,
            age : nextProps.selUser.age
        });
    }
    
    modifyEvent() {
        let idVal = (this.state.id != "");
        let nameVal = (this.state.name != "");
        let ageVal = false;
        
        let ageStr = (this.state.age == '')?"0":this.state.age + "";
        ageVal =(parseInt(ageStr) > 0);
        
        let isIn = idVal && nameVal && ageVal;
        
        if(isIn) {
            this.props.onModify(this.state.id, this.state.name, this.state.age);
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
    
    setObjValue(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    
    render() {
        let divStyle = isSelected => {
            let style = {};
            
            if( isSelected ) {
               style = { visibility : 'visible' }
            } else {
               style = { visibility : 'hidden' }
            }
            return style;
        };
        
        let setVal = this.setObjValue.bind(this);
        
        return (
            <div style={divStyle(this.props.isSelected)}>
                <input type="text" name="id" placeholder="Id"
                    value={this.state.id}
                    onChange={setVal}
                    />
                <input type="text" name="name" placeholder="Name" 
                    value={this.state.name}
                    onChange={setVal}
                    />
                <input type="text" name="age" placeholder="Age" 
                    value={this.state.age}
                    onChange={setVal}
                    />
                <button onClick={this.modifyEvent.bind(this)}>
                    Modify User
                </button>
            </div>     
        );
    }
}

export default TBManager;