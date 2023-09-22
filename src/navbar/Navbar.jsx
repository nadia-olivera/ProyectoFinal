import * as React from 'react';
import { AppBar, Box, Button, Drawer, IconButton, InputBase, Menu, MenuItem, Toolbar } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import "../css/styles.css"
import Login from "./Login";




export default function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    appBar: {
      background: 'linear-gradient(to right, #2ea67b, #186a4e)',
    },
  };

  return (
    <>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img className="logo" src="./img/logo.png"></img>
          </Box>
          <InputBase placeholder="Buscar..."
            sx={{
              color: 'white',
              marginRight: 1,
              paddingLeft: 1,
              borderRadius: 5,
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: '#2ea67b',
              backgroundColor: 'black',
              width: 250,
              height: 40,
              '&:hover': {
                bgcolor: "black",
                color: "white",
                borderStyle: 'solid',
                borderWidth: 2,
                borderColor: 'lime'
              },
            }}
            endAdornment={
              <SearchIcon
                sx={{
                  color: 'white',
                  marginRight: 1,
                }}
              />
            }
          />
          <Button
            sx={{
              bgcolor: "black",
              color: "white",
              gap: 0.5,
              borderColor: 'black',
              borderStyle: 'solid',
              borderWidth: 2,
              borderRadius: 5,
              fontWeight: "bold",
              textTransform: 'lowercase',
              '&:hover': {
                bgcolor: "black",
                borderColor: 'lime',
                borderStyle: 'solid',
                borderWidth: 2

              },
            }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <AccountCircleOutlinedIcon />
            Ingresar
          </Button>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{mt:1.5}}
      >
        <Login />
      </Menu>
          <Button sx={{
            color: "black", '&:hover': {
              color: "lime",
            },
          }}><FavoriteBorderIcon /></Button>
          <Button sx={{
            color: "black", '&:hover': {
              color: "lime",
            },
          }}><ShoppingCartOutlinedIcon /></Button>
        </Toolbar>
      </AppBar>
    </>
  )
}







