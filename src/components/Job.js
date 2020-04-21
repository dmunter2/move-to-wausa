import React from 'react';
import style from 'styled-components';


const DIV = style.div`
border: 1px solid red;
margin-top: 30px;
`
const H1 = style.h1`
margin: 0;
`

function Job() {

    return (
        <DIV>
            <H1>Job Openings</H1>
        </DIV>
    )
}


export default Job;