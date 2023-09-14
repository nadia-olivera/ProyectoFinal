import { Rating, Typography, CardMedia, CardContent, CardActionArea, Card,Button, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "../css/styles.css"

export default function Product() {
  return (
    <>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
    <Card className="card" sx={{ width: 285, color:"white"}}>
      <CardActionArea  sx={{ width: 285}}>
        <CardMedia
          component="img"
          alt="Producto"
          height="max-content"
          image="\img\producto1.png"
          title="Batidora"
        />
        <CardContent sx={{width: 285, height:100}}>
          <Rating name="read-only" readOnly />
          <Typography gutterBottom variant="h8" component="div" sx={{maxWidth:"90%" }}>
            Batidora de Mano OSTER con Pedestal 360W 10 Velocidades + Turbo Bowl Inox de 3.5L
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            $99.99
          </Typography>          
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="contained" startIcon={<AddShoppingCartIcon  />} sx={{mb: 1,bgcolor:"#186a4e"}}>
            Agregar al carrito
          </Button>
        </div>
      </CardActionArea>     
    </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
    <Card className="card" sx={{ width: 285, color:"white" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Producto"
          height="max-content"
          image="\img\producto1.png"
          title="Batidora"
        />
        <CardContent sx={{width: 285, height:100}}>
          <Rating name="read-only" readOnly />
          <Typography gutterBottom variant="h8" component="div" sx={{maxWidth:"90%" }} >
          Horno Eléctrico OSTER 30L 1600W con Rejilla y Asadera
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            $200.00
          </Typography>          
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="contained" startIcon={<AddShoppingCartIcon  />} sx={{mb: 1,bgcolor:"#186a4e"}}>
            Agregar al carrito
          </Button>
        </div>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
    <Card className="card" sx={{ width: 285, color:"white"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Producto"
          height="max-content"
          image="\img\producto2.webp"
          title="Batidora"
        />
        <CardContent sx={{width: 285, height:100}}>
          <Rating name="read-only" readOnly />
          <Typography gutterBottom variant="h8" component="div" sx={{maxWidth:"90%" }}>
           Cafetera OSTER Acero Inox 750W Capacidad 1.2 Litros Función Keep Warm
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            $350.00
          </Typography>          
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="contained" startIcon={<AddShoppingCartIcon  />} sx={{mb: 1,bgcolor:"#186a4e"}}>
            Agregar al carrito
          </Button>
        </div>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
    <Card className="card" sx={{ width: 285, color:"white"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Producto"
          height="max-content"
          image="\img\producto4.webp"
          title="Batidora"
        />
        <CardContent sx={{width: 285, height:100}}>
          <Rating name="read-only" readOnly />
          <Typography gutterBottom variant="h8" component="div" sx={{maxWidth:"90%" }}>
          Lavarropas ENXUTA Semiautomático Carga Superior Capacidad 5.5kg
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            $99.99
          </Typography>          
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="contained" startIcon={<AddShoppingCartIcon  />} sx={{mb: 1,bgcolor:"#186a4e"}}>
            Agregar al carrito
          </Button>
        </div>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    </>
  )
}