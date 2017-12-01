import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import infoStyle from '../style/info.css';

import CatImg from '../../../assets/Cat.png';
import DogImg from '../../../assets/Dog.png';

import TigImg from '../../../assets/Tiger.png';
import EleImg from '../../../assets/Elephant.png';

const Infomation = ({match}) => {
    const pName = match.params.name;
   
    return(
        <div>
            <h3>{pName}</h3>
            <br />
            {
                pName == "Dog" && <img src={DogImg} />
            }
            {
                pName == "Cat" && <img src={CatImg} />
            }
            {
                pName == "Tiger" && <img src={TigImg} />
            }
            {
                pName == "Elephant" && <img src={EleImg} />
            }
        </div>
    );
};

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
};

export default Info;