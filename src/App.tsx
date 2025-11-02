import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Piracy from "./pages/Piracy";

export const LIGHT_BG = "gray.100";
export const DARK_BG = "gray.900";

function App() {
  return (
    <Box minH="100vh" bg={{ base: LIGHT_BG, _dark: DARK_BG }}>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/piracy" element={<Piracy />} />
      </Routes>
      {/* <ScrollingBanner /> */}
    </Box>
  );
}

export default App;
