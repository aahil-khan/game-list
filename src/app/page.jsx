'use client';
import styles from './page.module.css';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Particles from './components/Particles';

export default function Home() {
  return (
    <div>
    <Container className={styles.main}>
      <Box className={styles.homepage}>
        homepage description
      </Box>
      <Box gap={5}>
        <Button href='/sign-in' sx={{ mr: 1 }} variant="contained">Log in</Button>
        <Button href="/sign-up" variant="contained">Sign Up</Button>
      </Box>
    </Container>
    <Particles id="tsparticles" />
    </div>
  );
}
