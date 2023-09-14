import { AppBar, Button, Drawer, IconButton, InputBase, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from '@mui/icons-material/Menu';
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
                    <img className="logo" src="./img/logo.jpg"></img>
                    <IconButton onClick={() => setOpen(true)}
                        color="black"
                        size="large"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, color: "black",fontSize:18 }}
                    >Categorias</Typography>
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