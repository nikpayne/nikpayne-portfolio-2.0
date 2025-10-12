import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Box minH="100vh" bg={{ base: "gray.50", _dark: "gray.950" }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Box>
  );
}

export default App;
