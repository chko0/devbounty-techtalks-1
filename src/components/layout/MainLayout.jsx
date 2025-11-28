import Footer from "./Footer";
import MarqueeBar from "./MarqueeBar";
import GradientWash from "../common/GradientWash";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import ChatButton from "../floating/ChatButton";
import RecreatorCredit from "../team/RecreatorCredits";

export default function MainLayout() {
  return (
    <>
      <RecreatorCredit />
      <ChatButton />
      <MarqueeBar />
      <GradientWash />
      <NavBar />
      <main className="z-0 relative top-24 min-h-screen flex flex-col overflow-hidden mb-30">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
