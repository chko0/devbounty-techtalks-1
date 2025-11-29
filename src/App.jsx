import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./components/common/ScrollToTop";
import LoadingScreen from "./components/layout/Loading";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const CoursesPage = React.lazy(() => import("./pages/CoursesPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ChampionsPage = React.lazy(() => import("./pages/ChampionsPage"));
const DevBountyPage = React.lazy(() => import("./pages/DevBountyPage"));
const InternshipsPage = React.lazy(() => import("./pages/InternshipsPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const TermsPage = React.lazy(() => import("./pages/TermsPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<LoadingScreen />}>
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
        </Suspense>
      </Router>
    </>
  );
}

export default App;
