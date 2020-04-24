import React from 'react';
import style from 'styled-components';


const DIV = style.div`
margin-top: 30px;
`
const H1 = style.h1`
margin: 0;
`
const Main = style.div`


display: flex;
justify-content: center;
align-items: center;
`
const H2 = style.h2`
border: 2px solid blue;
padding: 2%;
border-radius: 5px;
width: 80%;
`
const Hold = style.div`

`
const H5 = style.h2`
font-size: 1rem;
padding-bottom: 200px;
`
function Job() {

    return (
        <DIV>
            <H1>Job Openings : 1</H1>
            <Main>
                <H2>Big Red Mini Mart - Part Time </H2>
            </Main>


            <Hold>
                <H5>This job board will continue to be updated when jobs in Wausa open. An Idea I would love to bring
                    to this website would be to create a Remote job board. Several Wausa residents work remotely 
                    and I think we could gather up a few that would like to be a part of this. They would have an
                    email or phone number available and be a connecting point for people who want to 
                    live in Wausa and work remotely.
                </H5>
            </Hold>
        </DIV>
    )
}


export default Job;