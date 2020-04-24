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

// @media(min-width: 800px) {
//     display: none;
// }

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
 max-width: 500px;
`



const DIV2 = style.div`
display: flex;
flex-direction: column;
align-items: center;
// @media(min-width: 800px) {
//     display: none;
// }

`

const Other = style.div`
// @media(min-width: 800px) {
//     display: none;
// }
`
const MAIN = style.div`
margin-top: 3%;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;

`
const H1 = style.h1`
margin-left: 4%;
font-size: 1.3rem;
color: #25282a;
text-align: left;


`
const H3 = style.h2`
margin: 0;
text-align: left;
color: #1f2020;
font-size: 1.8rem;
fontweight: 800;
margin-left: 20px;
margin-top: 10px;
height: 50px;
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
flex-direction: row;
align-items: center;
border-radius: 5px 5px 0 0;
height: 250px;
justify-content: space-around;

`
const DIV4 = style.div`
display: flex;
flex-direction: column;
align-items: center;
border-radius: 5px 5px 0 0;
height: 250px;
// justify-content: end;

`
const Contain1 = style.div`
width: 92%;
background-color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin-bottom: 30px;
  border-radius: 5px;
  height: 320px;
  max-width: 500px;
`
const Contain2 = style.div`
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
width: 92%;
margin-bottom: 50px;
height: 320px;
max-width: 500px;
margin-top: 15px;
background-color: white;
border-radius: 5px;
`


const H7 = style.h2`
margin: 0;
text-align: left;
margin-left: 10px;
color: white;
font-size: 1.2rem;
font-family: 'Manrope', sans-serif;
`
const Hold1 = style.div`
width: 55%;
`

const DIV5 = style.div`
width: 100%;
`
const H5 = style.h2`
margin: 0;
text-align: left;
color: #1f2020;
font-size: 1.2rem;
fontweight: 800;
margin-left: 10px;
margin-top: 20px;
height: 100px;
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
                <DIV4 className='div4'>
                    <Link className='lunch' to='/specials'>Daily Specials</Link>
                    <Link className='lunch' to='/processing'>Custom Processing</Link>
             

                </DIV4>
                <DIV5>
                    <H3>Grab some lunch</H3>

                </DIV5>

           


            </Contain1>

            <Contain2>
                
                <DIV3 className='build'>


                    <Hold1>
                        <H7>We are proud of our Electricians, Plumbers, and Carpenters that have been taking care of the town for years.</H7>
                    </Hold1>




                    <Hold>
                        <Link className='tabs5' to='/specials'>McQuay Construction</Link>
                        <Link className='tabs5' to='/specials'>Burns Construction</Link>
                        <Link className='tabs5' to='/specials'>Bloomquist Plumbing</Link>
                    </Hold>


                   

                     


                </DIV3>
                <H5>Need something Fixed, Built, or Repaired?</H5>


            </Contain2> 
            
        






        </Hold>
    )
}


export default Container;
