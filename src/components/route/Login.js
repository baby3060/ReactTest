import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import LChild from './Login_child';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LHeader : [
                {"name" : "Login", "to" : "/login", "ex" : true, "comp" : LChild},
                {"name" : "Display", "to" : "/login/display", "ex" : false, "comp" : LChild},
                {"name" : "Select", "to" : "/login/select", "ex" : false, "comp" : LChild}
            ]
        }
    }
    
    render() {
        let links = this.state.LHeader.map(function(Menu) {
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
        })
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
    }
}

export default Login;