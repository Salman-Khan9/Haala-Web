import { FAM } from "./data";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Promises } from "./sections/Promises";
import { HowItWorks } from "./sections/HowItWorks";
import { Categories } from "./sections/Categories";
import { ServiceArea } from "./sections/ServiceArea";
import { Perks } from "./sections/Perks";
import { AppPreview } from "./sections/AppPreview";
import { StoryRider } from "./sections/StoryRider";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";
import { Footer } from "./sections/Footer";

export default function Haala() {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden", background: "#fff", font: "400 15px " + FAM }}>
      <Header />
      <Hero />
      <Promises />
      <HowItWorks />
      <Categories />
      <ServiceArea />
      <Perks />
      <AppPreview />
      <StoryRider />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}
