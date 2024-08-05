import styles from './page.module.css';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';


export default function Home() {
  return (
    <Container className={styles.main}>
      <Box className={styles.homepage}>
        homepage description
      </Box>
      <Box gap={5}>
        <Button href='/sign-in' sx={{mr:1}} variant="contained">Log in</Button>
        <Button href="/sign-up" variant="contained">Sign Up</Button>
      </Box>
    </Container>
  );
}
