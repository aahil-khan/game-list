'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Bungee_Inline } from 'next/font/google';
import { Teko } from 'next/font/google';

const bungee = Bungee_Inline({ subsets: ["latin"] , weight : '400' });
const teko = Teko({ subsets: ["latin"] , weight : '400'});
const pages = ['Review a game', 'Latest', 'Github'];
const links = {
  'Review a game' : '/review',
  'Latest' : '/latest',
  'Github' : 'https://github.com/aahil-khan/game-list'
}

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar sx={{backgroundColor:"#E0A75E"}} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsEsportsIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            className={bungee.className}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize:30,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MyGameShelf
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem component='a' href={links[page]} key={page} onClick={handleCloseNavMenu}>
                  <Typography style={{fontSize:"24px"}} className={teko.className} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SportsEsportsIcon fontSize='large' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1}} />
          <Typography
          className={bungee.className}
          style={{fontSize:"24px"}}
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MyGameShelf
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                className={teko.className}
                href={links[page]}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block','&:hover': {
        backgroundColor: 'primary.light',
        boxShadow: 3,
      }}}
                style={{fontSize:"20px"}}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;