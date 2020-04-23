import React from 'react';
import { Route } from 'react-router-dom';
import Listofbiz from './Listofbiz'
import Container from './Container';
import Header from './Header'
import News from './News';
import Job from './Job';
import Newheader from './Newheader';
import Board from './Board';


function Approuter() {

    return (
        <div>
            <Route path='/involved' component={Newheader} />
            <Route path='/(|openings|news|business|food)' component={Header} />
            <Route path='/news' component={News} />
            <Route path='/openings' component={Job} />
            <Route exact path='/involved' component={Board} />
            <Route path='/business' component={Listofbiz}  />
            <Route exact path='/' component={Container} />






        </div>
    )
}


export default Approuter;