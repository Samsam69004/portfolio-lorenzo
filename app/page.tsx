import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Parcours from './components/Parcours';
import About from './components/About';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <Hero />
      <AnimatedSection>
        <Parcours />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <About />
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <Experiences />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Gallery />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
}
