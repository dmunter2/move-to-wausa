import React from 'react';
import Business from './Business';
import style from 'styled-components';

import Food from './Food';
import Fix from './Fix';
import RE from './RE';
import News from './News';
import Job from './Job';



const MAIN = style.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`


function Container(){

    return(
        <div>
            <Business />

            <MAIN>
                <div>
                    <Food />
                    <Fix />
                    <RE />
                </div>

                <div>
                    <News />
                    <Job />
                </div> 
            </MAIN>



        </div>
    )
}


export default Container;
