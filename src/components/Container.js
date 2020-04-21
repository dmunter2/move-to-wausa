import React from 'react';
import Business from './Business';
import style from 'styled-components';
import {Link} from 'react-router-dom';

import Food from './Food';
import Fix from './Fix';
import RE from './RE';
import News from './News';
import Job from './Job';

const DIV1 = style.div`
width: 42%;
display: flex;
flex-direction: column;
overflow: auto;
max-height: 500px;

`
const DIV2 = style.div`
width: 42%;
display: flex;
flex-direction: column;
`

const MAIN = style.div`
margin-top: 3%;
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
`


function Container(){

    return(
        <div>
            <Business />

            <MAIN>
                <DIV1>
                    <Link className='tabs' to='/food'>Food</Link>
                    <Link className='tabs' to='/fix'>Fix</Link>
                    <Link className='tabs' to='/re'>Real Estate</Link>
                    <Link className='tabs' to='/church'>Church</Link>


                </DIV1>

                <DIV2>
                    <Link className='tabs1' to='/news'>News</Link>
                    <Link className='tabs2' to='/openings'>Job Openings</Link>
                </DIV2> 
            </MAIN>



        </div>
    )
}


export default Container;
