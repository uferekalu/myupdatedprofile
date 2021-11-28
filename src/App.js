import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//screens
import HomeScreen from "./screens/HomeScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import ProjectDetailScreen from "./screens/ProjectDetailScreen";
import AboutMe from "./screens/AboutMe"

//components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";


function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/project/:id" element={<ProjectDetailScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
