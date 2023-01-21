import Layout from "./components/Layout";
import SectionHero from "./components/SectionHero";
import SectionLogos from "./components/SectionLogos";
import SectionFeatures from "./components/SectionFeatures";
import SectionBenefits from "./components/SectionBenefits";
import SectionStars from "./components/SectionStars";
import SectionOffer from "./components/SectionOffer";

import "./components/Reset.css";
import "./components/Normalize.css";
import "./components/Fonts.css";
import "./components/Reuse.css";

const App = () => {
  return (
    <Layout>
      <SectionHero />
      <SectionLogos />
      <SectionFeatures />
      <SectionBenefits />
      <SectionStars />
      <SectionOffer />
    </Layout>
  );
};

export default App;
