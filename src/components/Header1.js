import styled from "styled-components";

import Apple from "../images/apple.png"
import {BsFillArrowRightSquareFill,BsFillArrowLeftSquareFill} from "react-icons/bs";



export default function Header1() {

  

  
    


  return (
    <Wrapper>
     <p>Drag and hover around model to experience this ultimate device.</p>
     
     
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
  background-color:transparent;
  position:static;
  z-index:11;
  width:45vw;
  height:auto;
  text-align: center;
  margin: 10px auto;

  

  p{
    font-family: 'Helvetica Neue',Helvetica;
    font-weight:500;
    font-size:20px;

    padding: 20px 6vw;
    color:black;
  }
`;
