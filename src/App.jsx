import { Box, Container } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import "./css/styles.css"
import NavCategories from "./navbar/NavCategories";

export default function App() {
  return (
    <>
    
    <Navbar />
    <NavCategories/>
    <div style={{
                
                // background: 'linear-gradient(to bottom, black, grey)',
                height:1000,
                padding:0,
                display:"block",
                width:"100%",
                color:"white"
                
            }}>
    
    <Container sx={{overflowX:"hidden"}}>
        <Box variant="h2" sx={{fontSize:25, mt:5,mb:5}}>Productos destacados</Box>
        <Product />              
      </Container>
      </div>
      <Footer />
    </>
  )
}