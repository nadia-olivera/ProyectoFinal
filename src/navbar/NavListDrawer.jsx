import { Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function NavListDrawer() {
    return (
        <Box sx={{ width: 250, bgcolor: "black", color: "white" }}>
            <nav>
                <List>
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>DORMITORIO</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>TECNOLOGÍA</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>ELECTRODOMÉSTICOS</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>JARDÍN Y EXTERIOR</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>SERVICIOS</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>BAZAR</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>FERRETERÍA</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{ color: "white" }}>FITNESS</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>COCINA</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>OFICINA</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>ILUMINACIÓN</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>SALUD - BELLEZA</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem>
                        <Button sx={{
                            color: "white", '&:hover': {
                                fontSize: 15,
                            },
                        }}>JARDIN</Button>
                    </ListItem>
                    <Divider sx={{ bgcolor: "Lime" }} />
                    <ListItem><Button sx={{ color: "white" }}>BAÑO</Button>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}