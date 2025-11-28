import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import ChampionsPage from "./pages/ChampionsPage";
import DevBountyPage from "./pages/DevBountyPage";
import InternshipsPage from "./pages/InternshipsPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import ScrollToTop from "./components/common/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="champions" element={<ChampionsPage />} />
            <Route path="devbounty" element={<DevBountyPage />} />
            <Route path="internships" element={<InternshipsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
