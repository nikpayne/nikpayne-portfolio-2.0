import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

export const LIGHT_BG = "gray.100";
export const DARK_BG = "gray.900";

function App() {
  return (
    <Box minH="100vh" bg={{ base: LIGHT_BG, _dark: DARK_BG }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <ScrollingBanner /> */}
    </Box>
  );
}

export default App;
