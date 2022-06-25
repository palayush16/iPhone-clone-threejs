import styled from "styled-components";

import Apple from "../images/apple.png"




export default function Header() {

  

  
    


  return (
    <Wrapper>

      <Title>
       
        <p>Get 5% instant Cashback up to ₹6,000 with qualifying HDFC Bank credit cards on orders over ₹54,900. Plus 6 months No Cost EMI with qualifying credit cards from most leading banks.<span><a href="https://www.apple.com/in/shop/buy-iphone/iphone-13-pro#"> Learn More > </a></span></p>
      </Title>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
background-color:#A0A0A0;
 

  text-align: center;
  margin: 0 auto;
  padding: 16px 0;
`;

const Title = styled.div`
  color:white;
  display:flex;
  justify-content: center;
  align-items: center;
  font-family:monospace;
 
  
  p{
    font-family: 'Helvetica Neue',Helvetica;
    font-weight:400;
    font-size:16px;
    padding:0 10vw;
    color:black;
  }
 a{
    color:#1E90FF;
  }
`;


