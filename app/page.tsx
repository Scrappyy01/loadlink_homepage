import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import SmartLabels from "./components/SmartLabels";
import AppDownload from "./components/AppDownload";
import PromoBanner from "./components/PromoBanner";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import LoadlinkConnect from "./components/Loadlink Connect";
import ConnectEcommerce from "./components/Connect Ecommerce";
import BenefitCards from "./components/BenefitCards";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Partners />
        <Features />
        <BenefitCards />
        <ConnectEcommerce />
        <LoadlinkConnect />
        <AppDownload />
        <PromoBanner />
      </main>
      <Footer />
    </>
  );
}
