import { AppBar, Box, Button, Drawer, IconButton, InputBase, Toolbar} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import "../css/styles.css"
import { useState } from "react";



export default function Navbar() {

    const [open, setOpen] = useState(false);

    const styles = {
        appBar: {
            background: 'linear-gradient(to right, #2ea67b, #186a4e)',
        },
    };

    return (
        <>
            <AppBar position="fixed" sx={styles.appBar}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1}}>
                    <img className="logo" src="./img/logo.png"></img>
                    </Box>                    
                    {/* <IconButton onClick={() => setOpen(true)}
                        color="black"
                        size="large"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, color: "black",fontSize:18 }}
                    >Categorias</Typography> */}
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
                            height: 35,
                            '&:hover': {
                                bgcolor: "black",
                                color: "white",
                                borderStyle: 'solid',
                                borderWidth:2,
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
                            borderRadius: 5,
                            fontWeight: "bold",
                            textTransform: 'lowercase',
                            '&:hover': {
                                bgcolor: "black",
                                borderColor: 'lime',                                
                                borderStyle: 'solid',
                                borderWidth:2
                                
                            },
                        }}>
                        <AccountCircleOutlinedIcon />
                        Ingresar
                    </Button>

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



/*

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


//registro
export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="nombre"
          label=" "
          defaultValue="Nombre"
        />
        <TextField
          required
          id="apellido"
          label=" "
          defaultValue="Apellido"
        />
        <TextField
          required
          id="celular"
          label=" "
          defaultValue="Celular"
        />
        <TextField
          required
          id="mail"
          label=" "
          defaultValue="Mail"
        /> 
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
     
      <Button
                        sx={{
                            bgcolor: "black",
                            color: "white",
                            gap: 0.5,
                            borderRadius: 5,
                            fontWeight: "bold",
                            textTransform: 'lowercase',
                            '&:hover': {
                                bgcolor: "black",
                                borderColor: 'lime',                                
                                borderStyle: 'solid',
                                borderWidth:2
                                
                            },
                        }}>
                        <AccountCircleOutlinedIcon />
                        Registrarme
                    </Button>

    </Box>
  );
}

// login
export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <TextField
          required
          id="mail"
          label=""
          defaultValue="Mail"
        />
      
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
     
      <Button
                        sx={{
                            bgcolor: "black",
                            color: "white",
                            gap: 0.5,
                            borderRadius: 5,
                            fontWeight: "bold",
                            textTransform: 'lowercase',
                            '&:hover': {
                                bgcolor: "black",
                                borderColor: 'lime',                                
                                borderStyle: 'solid',
                                borderWidth:2
                                
                            },
                        }}>
                        <AccountCircleOutlinedIcon />
                        Ingresar
                    </Button>
    </Box>
  );
}


*/