import React from 'react';
import style from 'styled-components';

const DIV = style.div`
`

const H1 = style.h1`
margin: 0;
font-size: 1.6rem;
text-align: left;
margin-left: 10px;
margin-top: 40px;
`
const H2 = style.h2`
font-size: 1rem;
color: #1f2020;
font-weight: 500;
margin: 10px;
padding: 10px;
`
const DIV1 = style.div`
background-color: #f5ddc5;
`
const Card = style.div`
margin-top: 30px;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
height: 200px;
width: 300px;
background-color: white;

@media(min-width: 600px) {
    // width:500px;
}


`

const Main = style.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 100px;
@media(min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 500px;
}

`
const H4 = style.h1`
font-size: 1rem;
`

function Board() {

    return (
        <DIV>
            <H1>Thank you for your interest in Wausa.</H1>

            <DIV1>
                <H2>There are many great ways to give back to the community.
                We have many different boards, teams, and activities that benefit
                the community significantly. Below I will list a few of those with the
                lead contact for that specific board. Please reach out if you are 
                interested.
                </H2>
            </DIV1>


            <Main>
                <Card>
                    <div>
                        <H4>Organization 1, Will need to Collect Information on different clubs, organizations, and volunteer groups.</H4>
                    </div>
                </Card>

                <Card>
                    <div>
                        <H4>#2</H4>
                    </div>
                </Card>
      
                <Card>
                    <div>
                        <H4>#3</H4>
                    </div>
                </Card>

            </Main>




        </DIV>
    )
}


export default Board;