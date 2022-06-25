import "./styles.css";
import styled from "styled-components";

// import Background from "./components/Background";
import TextSection from "./components/TextSection";
import TextSection2 from "./components/TextSection2";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import React, { Suspense} from "react";
// import Box from "./components/Box";
// import Plane from "./components/Plane";
// import Sphere from "./components/AnimatedSphere";
import Iphone from "./components/Iphone";
// import Desk from "./components/Desk";
import { Canvas } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

import { Physics} from '@react-three/cannon'

export default function App() {

  

  return (
    <Wrapper className="App">
      <TextSection className="text1"/>
      <Header/>
      
      <Container>
      <Canvas camera={ { position: [10,0, 10], fov: 75, near: 0.1, far: 1000 } } className="canvas">
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
        <Suspense fallback={null}>
        <Iphone/>
        </Suspense>
        
      </Canvas>
      
      <TextSection2/>
      </Container>

      {/* <Canvas camera={ { position: [-6, 5, 6], fov: 75, near: 0.1, far: 1000 } } className="canvas x">
        <OrbitControls enableZoom={false}/>       
        <directionalLight position={[-2,5,2]} intensity={1} />
        <Suspense fallback={null}>
        <Physics>
          <Box/>
          <Plane/>
        </Physics>        
        </Suspense>
      </Canvas> */}

    </Wrapper>
  );
}

const Wrapper = styled.div`
 
  background: white;
  height:90vh;
  width:100%;

  
 
  
`;
const Container = styled.div`
  display:flex;
  height:100%;
  width:100%;

  .canvas{
    background:white;
    margin: 0 0 6% 0;
    cursor:pointer;
    min-height:70vh;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
  
`;
