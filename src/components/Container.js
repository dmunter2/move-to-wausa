import React from 'react';
import Business from './Business';
import style from 'styled-components';
import {Link} from 'react-router-dom';
import Lunch from './lunch.jpg'
import Food from './Food';
import Fix from './Fix';
import RE from './RE';
import News from './News';
import Job from './Job';

const DIV1 = style.div`
display: flex;
flex-direction: column;
overflow: auto;

@media(min-width: 800px) {
    display: none;
}

`

const Hold = style.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 5%;
`
const Contain = style.div`
width: 92%;
border-radius: 5px;
background-color: white;
 box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
 padding: 10px 0 30px 0;
 margin-bottom: 40px;
`



const DIV2 = style.div`
display: flex;
flex-direction: column;
align-items: center;
@media(min-width: 800px) {
    display: none;
}

`

const Other = style.div`
@media(min-width: 800px) {
    display: none;
}
`
const MAIN = style.div`
margin-top: 3%;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;
`
const H1 = style.h1`
text-align: left;
margin-left: 4%;
font-size: 1.3rem;
color: #25282a;
`
const H2 = style.h1`
font-size: 1.6rem;
text-align: left;
font-family: 'Lato', sans-serif;
margin-left: 3%;
margin-top: 0;
margin-bottom: 40px;
`
const DIV3 = style.div`
display: flex;
flex-direction: column;
align-items: center;

`
const DIV4 = style.div`
display: flex;
flex-direction: column;
align-items: center;


`
const Contain1 = style.div`
width: 100%;
background-color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin-bottom: 30px;
`
const Img = style.img`
height: 280px;
width: 350px;
`


function Container(){

    return(
        <Hold>
            <Contain>

                <Other>
                    {/* <Business /> */}

                </Other>

                <MAIN>
                    <DIV1>
                        {/* <Link className='tabs' to='/food'>Food</Link>
                        <Link className='tabs' to='/fix'>Fix</Link>
                        <Link className='tabs' to='/re'>Real Estate</Link>
                        <Link className='tabs' to='/church'>Church</Link> */}
                        <H1>Welcome to Wausa</H1>
                        <H2>We are a community that cares. Check out what we have to offer.</H2>

                    </DIV1>

                    <DIV2>
                        <Link className='tabs1' to='/news'>News</Link>
                        <Link className='tabs2' to='/openings'>Job Openings</Link>
                    </DIV2> 
                </MAIN>
            </Contain>

            <Contain1 >
                <H1>Grab Some Lunch</H1>
                <DIV4 className='div4'>
                    <Link className='tabs' to='/specials'>Daily Specials</Link>
                    <Link className='tabs' to='/processing'>Custom Processing</Link>
                </DIV4>
                <H1>The Handymen of Wausa</H1>
                <DIV3>
                    <Link className='tabs' to='/specials'>Burns Construction</Link>
                    <Link className='tabs' to='/processing'>McQuay Construction</Link>
                    <Link className='tabs' to='/plumbing'>Bloomquist Plumbing</Link>
                </DIV3>


            </Contain1>






        </Hold>
    )
}


export default Container;
