import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import infoStyle from './style/info.css';


const Infomation = ({match}) => {
    return(
        <div>
            <h3>{match.params.name}</h3>
        </div>
    );
}

const Info = () => {
    return(
        <div>
            <div>
                <h2>동물소개</h2>
                <NavLink to="/info/Dog" className={infoStyle.items}>개</NavLink>
                <NavLink to="/info/Cat" className={infoStyle.items}>고양이</NavLink>
                <NavLink to="/info/Tiger" className={infoStyle.items}>호랑이</NavLink>
                <NavLink to="/info/Elephant" className={infoStyle.items}>코끼리</NavLink>
            </div>
        
            <div>
                <Switch>
                    <Route path="/info/:name" component={Infomation} />
                    <Route path="/info/:name" component={Infomation} />
                    <Route path="/info/:name" component={Infomation} />
                    <Route path="/info/:name" component={Infomation} />
                </Switch>
            </div>
        </div>
    );
}

export default Info;