import styled from "styled-components";
import {useEffect, useState} from 'react';
import Apple from "../images/apple.png"




export default function TextSection() {

  

  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
     
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
      
      
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
    
    return () => {
   
      window.removeEventListener('mousemove', handleWindowMouseMove);
      
    };
  }, []);
    

  
    


  return (
    <Wrapper>

      <Title>
        <img className="logo" src={Apple}></img>
        <h3><span>iPhone</span> - Apple<span>(IN)</span></h3>
      </Title>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
background-color:black;
 

  text-align: center;
  margin: 0 auto;
  padding: 16px 0;
`;

const Title = styled.div`
position:sticky;
  color:white;
  display:flex;
  justify-content: center;
  align-items: center;
  font-family:monospace;
  font-size: 24px;
  font-weight:300;
  
  .logo{
    width:70px;
    height:40px;
  }
  img:hover{
    color:white;
  }
  span{
    font-weight:300;
  }
`;


