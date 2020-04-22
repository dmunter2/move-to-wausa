import React from 'react';
import { Route } from 'react-router-dom';
import Listofbiz from './Listofbiz'
import Container from './Container';
import Header from './Header';


function Approuter() {

    return (
        <div>
            <Route exact path='/' component={Header} />
            <Route path='/business' component={Listofbiz}  />
            <Route exact path='/' component={Container} />






        </div>
    )
}


export default Approuter;