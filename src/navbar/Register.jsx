import * as React from 'react';
import { Box, TextField, Button } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';




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