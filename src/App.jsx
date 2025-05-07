import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Box } from "@mui/material";
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          pt: 4,
          pb: 6,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
