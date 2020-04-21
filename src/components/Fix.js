import React from 'react';
import style from 'styled-components';

const DIV = style.div`
border: 1px solid red;
`

const H1 = style.h1`
margin: 0;
`


function Fix() {

    return (
        <DIV>
            <H1>Fix</H1>



        </DIV>
    )
}


export default Fix;
