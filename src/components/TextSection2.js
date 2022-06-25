import styled from "styled-components";
import {useEffect, useState} from 'react';
import f1 from "../images/f1.png"
import f2 from "../images/f2.png"
import f3 from "../images/f3.png"

export default function TextSection2() {

  

    

  
    


  return (
    <Wrapper>
      <Title>
        <h4>iPhone 13 Pro</h4>
        <p>The ultimate iPhone.</p>
    </Title>
    <Cta>
        <p>From ₹14111.00/mo.Per Month with EMI, or ₹119900.00</p>
        <a href="https://www.apple.com/in/shop/buy-iphone/iphone-13-pro"><button className="cta-button" >Buy now</button></a>
        <a classname="cta-link" href="https://www.apple.com/in/shop/"> Learn more ></a>
    </Cta>
      <Features>
        <img src={f1} alt="" />
        <img src={f3} alt="" />
        <img src={f2} alt="" />
      </Features>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

color:black;
width:100%;
height:50vh;
  text-align: center;
  margin: 6% 6% 0 0;
  padding: 30px 0;
  
`;

const Title = styled.div`
  
  
  h4{
    font-size:32px;
    font-weight:600;
    margin-bottom:10px;
  }

  p{
    font-size:20px;
    font-weight:500;
    color:gray;
    font-family:'Arial',monospace;
  }
  
`;

const Cta =styled.div`

margin:30px 0;



p{
    font-size:16px;
    font-weight:400;
    color:gray;
    margin-bottom:10px;
  }
  .cta-button{
    outline:none;
    padding: 14px 20px;
    font-size:16px;
    background-color:#1E90FF;
    border:none;
    border-radius:20px;
    color:white;
    cursor:pointer;
  }
  .cta-button:hover{
    transform:scale(1.1);
    transition:ease-in-out 300ms;
  }
  a{
    color:#1E90FF;
    margin:6px;
    
  }
`;


const Features = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;