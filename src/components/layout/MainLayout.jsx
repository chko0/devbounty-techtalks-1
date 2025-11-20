import MarqueeBar from "./MarqueeBar";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <MarqueeBar />
      <NavBar />
      <main className="z-0">
        <Outlet />
      </main>
    </>
  );
}
