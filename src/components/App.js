import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Home from './Home';
import Login from './route/Login';

import Hstyle from './style/header.css';

import classNames from 'classnames';

class App extends Component {
    render() {
        const Header = () => {
           return(
                <div className={classNames(Hstyle.header, Hstyle.blue)} >
                    <NavLink className={classNames(Hstyle.items, Hstyle.big)} exact={true} to="/" activeStyle={{ color: 'red' }}>홈</NavLink>
                    <NavLink className={classNames(Hstyle.items, Hstyle.big)} exact={false} to="/login" activeStyle={{ color: 'red' }}> Login</NavLink>
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
                            <Route exact={false} path="/login" component={Login} />
                        </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;
