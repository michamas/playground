import "./App.css";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import { Navigation, BorderAnimation } from "./components";
import { FeedbackApp } from "./components/Feedback/FeedbackApp/FeedbackApp.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />}>
          <Route path="borderAnimation" element={<BorderAnimation />} />
          <Route path="feedback" element={<FeedbackApp />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
