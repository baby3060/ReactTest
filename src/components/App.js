import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Login from './route/Login';

class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Header />  
            
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