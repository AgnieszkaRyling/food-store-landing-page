import Layout from "./components/Layout";
import SectionHero from "./components/SectionHero";
import SectionLogos from "./components/SectionLogos";
import SectionFeatures from "./components/SectionFeatures";
import SectionBenefits from "./components/SectionBenefits";

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
    </Layout>
  );
};

export default App;
