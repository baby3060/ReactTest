import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import LChild from './route/Login_child';
import LChild2 from './route/Login_child2';
import JChild from './route/Join_child';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LHeader : [
                {"name" : "Login", "to" : "/login", "ex" : true, "comp" : LChild, "onBtn" : this.loginClick.bind(this)},
                {"name" : "Join", "to" : "/login/join", "ex" : false, "comp" : JChild, "onBtn" : this.NullClick.bind(this)}
            ]
        }
    }
    
    loginClick() {
        this.props.onLogin();
    }
    
    NullClick() {
        return;
    }
    
    render() {
        let links = this.state.LHeader.map(function(Menu) {
            // First Way : Rendering 이용하여, PROPS 넘기기
            // Second Way : match.params 넘기기
            
            // First Way
            
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
            
            // First Way
            
            // Second Way
            /*
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
            */
            // Second Way
        })
        
        // First Way
        
        return (
            <div>
                {
                    this.props.logFlag && <Redirect to="/pur" />
                }
                <h3>로그인 화면입니다. 상세 화면을 선택하세요.</h3>
                {links}
                <div>
                    <Switch>
                        {this.state.LHeader.map((Menu) =>
                            <Route 
                                    exact={Menu.ex}
                                    path={Menu.to} 
                                    render={(props) => (
                                    <Menu.comp name={Menu.name}
                                                onSave={Menu.onBtn}
                                    />
                                    )}
                                    key={Menu.to}
                            />
                        )}
                    </Switch>
                </div>
            </div>
        );
        
        // First Way
        
        // Second Way
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
                                    path={Menu.to+"/:name"} 
                                    component={Menu.comp}
                                    key={Menu.to}
                            />
                        )}
                    </Switch>
                </div>
            </div>
        );
        */
        // Second Way
        
    }
}

export default Login;