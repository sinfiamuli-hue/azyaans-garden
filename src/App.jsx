import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import BasketDrawer from "./components/BasketDrawer.jsx";
import Home from "./pages/Home.jsx";
import Plants from "./pages/Plants.jsx";
import PlantDetail from "./pages/PlantDetail.jsx";
import OurStory from "./pages/OurStory.jsx";
import Delivery from "./pages/Delivery.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/plants/:slug" element={<PlantDetail />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BasketDrawer />
    </>
  );
}
