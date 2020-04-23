import React from 'react';
import styled from 'styled-components';
import style from 'styled-components';
import {Link} from 'react-router-dom';


// const IMG = styled.img``


const DIV = styled.div`
color: black;
border-bottom: 1px solid #F0F0F0;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: white;

`
const DIV1 = style.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`

const DIV2 = style.div`
@media(max-width: 800px) {
    display: none;
}
`


const H1 = style.h1`
width: 30%;
margin-left: 20px;
color: #25282a;
font-family: 'Lato', sans-serif;
font-size: 1.8rem;
`





function Header() {
    return(
        <DIV>
            <div>
                {/* <IMG src={image} /> */}
                <H1>Wausa</H1>
            </div>
            <DIV1>
                <Link className='btn3' to='/involved'>Get Involved</Link>

            </DIV1>

            <DIV2>
                <Link className='btn'>News</Link>
                <Link className='btn'>Job Openings</Link>
            </DIV2>


        </DIV>


    )
}



export default Header;
