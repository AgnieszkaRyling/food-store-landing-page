import Layout from "./components/Layout";
import SectionHero from "./components/SectionHero";
import SectionLogos from "./components/SectionLogos";

import "./components/Reset.css";
import "./components/Normalize.css";
import "./components/Fonts.css";
import "./components/Reuse.css";

const App = () => {
  return (
    <Layout>
      <SectionHero />
      <SectionLogos />
    </Layout>
  );
};

export default App;
