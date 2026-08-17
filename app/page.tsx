import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import PropertyFeature from "@/components/PropertyFeature";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import WhySyntora from "@/components/WhySyntora";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Portfolio />
      <Services />
      <PropertyFeature />
      <Industries />
      <Process />
      <WhySyntora />
      <CaseStudy />
      <About />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
}
