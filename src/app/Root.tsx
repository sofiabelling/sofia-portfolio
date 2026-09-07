import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Nav from "../components/Nav";

export default function Root() {
  // React Router keeps the browser's scroll position across route changes
  // by default, so navigating to a new page from partway down the last one
  // lands mid-scroll instead of at the top. Reset it on every path change.
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ background: "#f7f8f4", minHeight: "100vh", color: "#171717" }}>
      <Nav />
      <Outlet />
    </div>
  );
}
