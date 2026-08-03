import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Vision } from "./components/Vision";
import { Experience } from "./components/Experience";
import { Evidence } from "./components/Evidence";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vision />
        <Experience />
        <Evidence />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
