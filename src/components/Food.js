import React from 'react';
import style from 'styled-components';

const DIV = style.div`
border: 1px solid red;
`
const H1 = style.h1`
margin: 0;
`

function Food() {

    return (
        <DIV>
            <H1>Food</H1>



        </DIV>
    )
}


export default Food;