import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import LChild from './Login_child';
import LChild2 from './Login_child2';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LHeader : [
                {"name" : "Login", "to" : "/login", "ex" : true, "comp" : LChild2},
                {"name" : "Display", "to" : "/login/display", "ex" : false, "comp" : LChild2},
                {"name" : "Select", "to" : "/login/select", "ex" : false, "comp" : LChild2}
            ]
        }
    }
    
    render() {
        let links = this.state.LHeader.map(function(Menu) {
            // First Way : Rendering 이용하여, PROPS 넘기기
            // Second Way : match.params 넘기기
            
            // First Way
            /*
            return(
                <NavLink to={Menu.to}
                            key={Menu.name}
                            style={
                                {color : 'black'},
                                {marginLeft : '20px'}
                            }
                            exact={Menu.ex}
                            activeStyle={{ color: 'red' }}
                    >{Menu.name}</NavLink>
            )   
            */
            // First Way
            
            // Second Way
            return(
                <NavLink to={Menu.to+"/" + Menu.name}
                            key={Menu.name}
                            style={
                                {color : 'black'},
                                {marginLeft : '20px'}
                            }
                            exact={Menu.ex}
                            activeStyle={{ color: 'red' }}
                    >{Menu.name}</NavLink>
            )   
            // Second Way
        })
        
        // First Way
        /* 
        return (
            <div>
                
                <h3>로그인 화면입니다. 상세 화면을 선택하세요.</h3>
                {links}
                <div>
                    <Switch>
                        {this.state.LHeader.map((Menu) =>
                            <Route 
                                    exact={Menu.ex}
                                    path={Menu.to} 
                                    render={(props) => (
                                    <Menu.comp name={Menu.name}/>
                                    )}
                                    key={Menu.to}
                            />
                        )}
                    </Switch>
                </div>
            </div>
        );
        */
        // First Way
        
        // Second Way
        return (
            <div>
                
                <h3>로그인 화면입니다. 상세 화면을 선택하세요.</h3>
                {links}
                <div>
                    <Switch>
                        {this.state.LHeader.map((Menu) =>
                            <Route 
                                    exact={Menu.ex}
                                    path={Menu.to+"/:name"} 
                                    component={Menu.comp}
                                    key={Menu.to}
                            />
                        )}
                    </Switch>
                </div>
            </div>
        );
        // Second Way
        
    }
}

export default Login;