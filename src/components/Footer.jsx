import { Container, Grid, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import Map from "./Map";

export default function Footer() {

 
    return (
        <> 
        <div style={{
                width:"100%",
                height:"400px",
                color:"white",
                background: 'black',
                padding:0,
            }}>
                <Container>
                <Grid container>
                    
                    <Grid item xs={6} md={8} sx={{textAlign:"left",mt:3}}>
                        <h2>¿Necesitás hablar con nosotros?</h2>
                        <WhatsAppIcon sx={{ fontSize: 50, padding:1}} />
                        <EmailIcon sx={{ fontSize: 50, padding:1}} />
                        <h4>Iniciá un chat desde Whatsapp o envíanos un mensaje</h4>
                        <FacebookIcon sx={{ fontSize: 50, padding:1}} />
                        <InstagramIcon sx={{ fontSize: 50, padding:1}} />
                        <YouTubeIcon sx={{ fontSize: 50, padding:1}} />
                        <h3>Seguinos en nuestras redes y enterate de nuestras novedades</h3>
                    </Grid>
                    <Grid item xs={6} md={4} sx={{mt:5}}>
                    <Map />                    
                    </Grid>                   
                </Grid>
                </Container>
               
        </div>

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