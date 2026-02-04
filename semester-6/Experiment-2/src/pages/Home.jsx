import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg">
        <HeroSection />
        <CardComponent />
      </Container>

      <Footer />
    </>
  );
}