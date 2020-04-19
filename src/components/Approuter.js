import React from 'react';
import { Route } from 'react-router-dom';
import Listofbiz from './Listofbiz'
import Container from './Container';


function Approuter() {

    return (
        <div>
            <Route path='/business' component={Listofbiz}  />
            <Route exact path='/' component={Container} />



        </div>
    )
}


export default Approuter;