import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';

const Main = style.div`
  display: flex;
justify-content: center;
`
const DIV = style.div`
  display: flex;
justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 1%;
  margin: 1%;
  width: 475px;
  height: 50px;
  border-radius: 5px;

`



function Business() {

    return (
        <Main>
        <DIV>
            <Link className='business' to='/business'>Businesses in Wausa</Link>




        </DIV>
        </Main>


    )
}


export default Business;
