import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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


                    <Button variant="h1"
                        sx={{
                            bgcolor: "lime",
                            color: "black",
                            gap: 1,
                            borderRadius: 5,
                            letterSpacing: 1,
                            fontWeight: "bold",
                            '&:hover': { 
                                bgcolor: "PaleGreen", 
                                color: "white", 
                            },
                        }}>
                        <AccountCircleOutlinedIcon />
                        INGRESAR
                    </Button>

                    <Button sx={{
                        color: "lime", '&:hover': {                            
                            color: "PaleGreen", 
                        },
                    }}><FavoriteBorderIcon /></Button>
                    <Button sx={{
                        color: "lime", '&:hover': { // Estilos al pasar el mouse sobre el botón                            
                            color: "PaleGreen", // Cambiar el color del texto al pasar el mouse
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