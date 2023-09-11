import { Container } from "@mui/material";
import Navbar from "./navbar/Navbar";

export default function App() {
  return (
    <>
    <Navbar />
      <Container sx={{ mt: 5 }}>
        <h1>Home</h1>
      </Container>
    </>
  )
}