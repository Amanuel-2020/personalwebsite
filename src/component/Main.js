import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Base from './Base';

const Main = () =>(
    <main>
        <Switch>
            <Route path='/' exact component={Base}/>
        </Switch>
        
    </main>
)
export default Main;