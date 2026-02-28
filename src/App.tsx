import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";
import { Pricing } from "./components/sections/Pricing";
import { CTA } from "./components/sections/CallToAction";
// import { Footer } from "./components/elements/Footer";
function App() {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <Brands/>
      <Services/>
      <AboutUs/>
      <Pricing/>
      <CTA/>
      {/* <Footer/> */}
    </Layout>
  );
}

export default App;