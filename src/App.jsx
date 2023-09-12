import { Box, Container } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import "./css/styles.css"


export default function App() {
  return (
    <>
    
    <Navbar />
    <div className="divPrincipal" style={{
                
                // background: 'linear-gradient(to bottom, black, grey)',
                height:1000,
                padding:0,
                display:"block",
                width:"100%",
                color:"white"
                
            }}>           
    <Container sx={{ mt: 8 ,overflowX:"hidden"}}>
        <Box variant="h2" sx={{borderBottom:5,borderColor:"#2ea67b",fontSize:30, mt:5,mb:5}}>Productos destacados</Box>
        <Product />        
      </Container>
      </div>
      <Footer />
    </>
  )
}