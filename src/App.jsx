import { Container } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Product from "./components/Product";


export default function App() {
  return (
    <>
    
    <Navbar />
    <Container sx={{ mt: 10 }}>
        <h1>Home</h1>
        <Product />
      </Container>
    </>
  )
}