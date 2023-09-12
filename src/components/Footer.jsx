import { Grid, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {

 
    return (
        <>

            <div style={{
                textAlign: "center",
                width:"100%",
                color:"white",
                height: "50px",
                background: 'linear-gradient(to right, #2ea67b, #186a4e)',
                padding:0
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Typography sx={{fontSize:12}}>
                            Ildefonso de León, 91400 Tala, Departamento de Canelones
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <FacebookIcon sx={{ml:80}} />
                        <InstagramIcon />
                        <YouTubeIcon />
                    </Grid>
                </Grid>
            </div>

        </>
    )
}