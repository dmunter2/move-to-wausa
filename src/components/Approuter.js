import React from 'react';
import { Route } from 'react-router-dom';
import Listofbiz from './Listofbiz'
import Container from './Container';
import Header from './Header'
import News from './News';
import Job from './Job';


function Approuter() {

    return (
        <div>
            <Route path='/(|openings|news|business|food)' component={Header} />
            <Route path='/news' component={News} />
            <Route path='/openings' component={Job} />

            <Route path='/business' component={Listofbiz}  />
            <Route exact path='/' component={Container} />






        </div>
    )
}


export default Approuter;