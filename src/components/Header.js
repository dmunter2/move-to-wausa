import React from 'react';
import styled from 'styled-components';
import style from 'styled-components';


// const IMG = styled.img``


const DIV = styled.div`
color: black;
border-bottom: 1px solid #F0F0F0;
display: flex;
flex-direction: row;
justify-content: space-between;

`
const DIV1 = style.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`
const H1 = style.h1`
width: 30%;
margin-left: 20px;
`

const BTN = style.button`
height: 40px;
background-color: #4a154b;
border: none;
border-radius: 5px;
color: white;
font-size: 1rem;



`




function Header() {
    return(
        <DIV>
            <div>
                {/* <IMG src={image} /> */}
                <H1>Wausa</H1>
            </div>
            <DIV1>
                <BTN className='btn'>Get Involved</BTN>

            </DIV1>
        </DIV>


    )
}



export default Header;
