import * as React from 'react';
import { Box, Button, Grid, TextField, Typography } from "@mui/material";


export default function Login() {
    return (
        <Box sx={{ width: 250, maxWidth: '100%', height: 170 }}
            component="form"
            noValidate
            autoComplete="off"
        >


            <TextField sx={{
                 display: "block", "& .MuiInputBase-root": {
                    height: 40,
                    width:235,
                    ml: 1
                },
            }}
                id="cedula"
                placeholder='Cédula'
            />

            <TextField sx={{
                 display: "block", mt: 2, "& .MuiInputBase-root": {
                    height: 40,
                    width:235,
                    ml: 1
                },
            }}
                id="contrasenia"
                placeholder='Contraseña'
                type="password"
                autoComplete="current-password"
            />
            <Grid container sx={{mt:2,justifyContent: 'space-between'}} >
            <Button
                sx={{
                    ml:1,
                    bgcolor: "black",
                    color: "white",
                    borderColor: 'black',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderRadius: 5,
                    fontWeight: "bold",
                    textTransform: 'none',
                    '&:hover': {
                        bgcolor: "black",
                        borderColor: 'lime',
                        borderStyle: 'solid',
                        borderWidth: 1

                    },
                }}>
                Registrarme
            </Button>
            <Button
                sx={{
                    mr:1,
                    bgcolor: "black",
                    color: "white",
                    borderColor: 'black',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderRadius: 5,
                    fontWeight: "bold",
                    textTransform: 'none',
                    '&:hover': {
                        bgcolor: "black",
                        borderColor: 'lime',
                        borderStyle: 'solid',
                        borderWidth: 1

                    },
                }}>
                Ingresar
            </Button>
            </Grid>
            <Typography sx={{textAlign:"center", fontSize:12,mt:1}}>Olvidé mi contraseña</Typography>
        </Box >
    );
}
