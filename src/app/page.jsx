'use client';
import React from 'react';
import styles from './page.module.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import Particles from './components/Particles';
import RenderGameTiles from './components/renderGameTiles';
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();

  const [isUserSearching , setUserSearching] = React.useState(false);
  const [params , setParams] = React.useState("");

  function handleKeyDown(event){
    if(event.key==='Enter'){
      router.push("/review")
    }
  }
  function handleSearchChange(event){
    setParams(event.target.value);
  }


  return (
    <div>
    <Container className={styles.main}>
      <Box sx={{mt:5}}>
        <RenderGameTiles condition={isUserSearching ? "search" : "home"} params={params} />
      </Box>
    </Container>
    <Particles id="tsparticles" />
    </div>
  );
}
