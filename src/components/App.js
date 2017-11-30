import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Info from './Info';
import Purchase from './Purchase';

import Hstyle from './style/header.css';

import classNames from 'classnames';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logFlag : false
        }
    }
    
    loginHandle() {
        this.setState({
           logFlag : true 
        });
    }
    
    render() {
        const Header = () => {
           return(
                <div className={classNames(Hstyle.header, Hstyle.blue)} >
                    <NavLink className={classNames(Hstyle.items, Hstyle.big)} exact={true} to="/" activeStyle={{ color: 'red' }}>홈</NavLink>
                    <NavLink className={classNames(Hstyle.items, Hstyle.big)} exact={false} to="/info" activeStyle={{ color: 'red' }}> 동물소개</NavLink>
                    <NavLink className={classNames(Hstyle.items, Hstyle.big)} exact={false} to="/login" activeStyle={{ color: 'red' }}> Login</NavLink>
                    <NavLink className={classNames(Hstyle.items, Hstyle.big)} exact={false} to="/pur" activeStyle={{ color: 'red' }}> 구매</NavLink>
                </div>
           )
        }

        return(
            <Router>
                <div>
                    {<Header />}

                    <div>
                        <Switch>
                            <Route exact={true} path="/" component={Home} />
                            <Route exact={false} path="/info" component={Info} />
                            <Route exact={false} path="/login" 
                                render={(props) => (
                                    <Login logFlag={this.state.logFlag} 
                                            onLogin={this.loginHandle.bind(this)}
                                        />
                                    )}
                            />
                            <Route exact={false} path="/pur" 
                                    render={(props) => (
                                    <Purchase logFlag={this.state.logFlag} 
                                        />
                                    )}
                            />
                        </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;
