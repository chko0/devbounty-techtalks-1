import Footer from "./Footer";
import MarqueeBar from "./MarqueeBar";
import GradientWash from "../common/GradientWash";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <MarqueeBar />
      <GradientWash />
      <NavBar />
      <main className="z-0 relative top-24 min-h-screen flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
