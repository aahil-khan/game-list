'use client';
import styles from '../page.module.css';
import { useTheme } from '@mui/material/styles';
import GameTile from '../components/gameTile';
import { Container } from '@mui/material';

export default function Home() {
    const theme = useTheme();  

  return (
    <div>
    <Container className={styles.main}>
        <GameTile imgLink="https://www.giantbomb.com/a/uploads/scale_medium/33/338034/3287019-3786480319-Z7hV9.png" name = "Game Name" deck = "Game Deck"/>
    </Container>
    </div>
  );
}



