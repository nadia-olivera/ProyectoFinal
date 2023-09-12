import { Box, Button, Divider, List, ListItem, ListItemText } from "@mui/material";



export default function NavListDrawer() {
    return (
        <Box sx={{ width: 250,bgcolor: "#2ea67b", color: "white" }}>
            <nav>
                <List>
                    <ListItem button>
                        <ListItemText  primary="DORMITORIO" />
                    </ListItem>
                    <Divider sx={{ bgcolor: "black" }} />
                    <ListItem button>
                        <ListItemText  primary="TECNOLOGÍA" />
                    </ListItem>
                    <Divider sx={{ bgcolor: "black" }} />
                    <ListItem button>
                        <ListItemText  primary="ELECTRODOMÉSTICOS" />
                    </ListItem>
                    <Divider sx={{ bgcolor: "black" }} />
                    <ListItem button>
                        <ListItemText  primary="JARDÍN Y EXTERIOR" />
                    </ListItem>
                    <Divider sx={{ bgcolor: "black" }} />
                    <ListItem button>
                        <ListItemText  primary="SERVICIOS" />
                    </ListItem>                    
                </List>
            </nav>
        </Box>
    )
}