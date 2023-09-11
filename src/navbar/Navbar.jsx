import { AppBar, Box, Button, Drawer, IconButton, InputBase, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";



export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar position="fixed" sx={{ bgcolor: "black" }}>
                <Toolbar>
                    <IconButton onClick={() => setOpen(true)}
                        color="inherit"
                        size="large"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                    >Categorías</Typography>
                    <InputBase placeholder="Buscar..."
                        sx={{
                            color: 'white',
                            marginRight: 1,
                            paddingLeft: 1,
                            borderRadius: 5,
                            borderWidth:2,
                            borderStyle: 'solid',
                            borderColor:'#16FF00',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            width:250,
                            height:37
                        }}
                        endAdornment={
                            <SearchIcon
                              sx={{
                                color: '#16FF00',
                                marginRight: 1,
                              }}
                            />
                          }
                        />           
                    <Button variant="h1"
                        sx={{
                            bgcolor: "#16FF00",
                            color: "black",
                            gap: 0.5,
                            borderRadius: 5,
                            letterSpacing: 1,
                            fontWeight: "bold",
                            '&:hover': {
                                bgcolor: "green",
                                color: "black",
                            },
                        }}>
                        <AccountCircleOutlinedIcon />
                        INGRESAR
                    </Button>

                    <Button sx={{
                        color: "#16FF00", '&:hover': {
                            color: "green",
                        },
                    }}><FavoriteBorderIcon /></Button>
                    <Button sx={{
                        color: "#16FF00", '&:hover': { // Estilos al pasar el mouse sobre el botón
                            color: "green", // Cambiar el color del texto al pasar el mouse
                        },
                    }}><ShoppingCartOutlinedIcon /></Button>
                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >
                <NavListDrawer />
            </Drawer>
        </>
    )
}