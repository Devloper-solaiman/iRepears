import Container from "@/components/Container/Container";
import HeroSection from "./HeroSection";
import About from "../About/About";
import ServicesSection from "./ServicesSection";

const Hoem = () => {
  return (
    <>
      <Container>
        <HeroSection />
        <About />
        <ServicesSection />
      </Container>
    </>
  );
};

export default Hoem;
