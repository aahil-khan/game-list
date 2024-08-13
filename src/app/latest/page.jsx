'use client';
import { useEffect } from 'react';
import styles from '../page.module.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import Particles from '../components/Particles';
import RenderGameTiles from '../components/renderGameTiles';

export default function Home() {

  useEffect(()=>{
    
  },[])


  return (
    <div>
    <Container className={styles.main}>
      <Box>
        Latest Games!
      </Box>
      <Box sx={{mt:5}}>
        <RenderGameTiles condition="latest"/>
      </Box>
    </Container>
    <Particles id="tsparticles" />
    </div>
  );
}
