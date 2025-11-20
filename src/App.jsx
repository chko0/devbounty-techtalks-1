import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import ChampionsPage from "./pages/ChampionsPage";
import DevBountyPage from "./pages/DevBountyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="champions" element={<ChampionsPage />} />
          <Route path="devbounty" element={<DevBountyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
