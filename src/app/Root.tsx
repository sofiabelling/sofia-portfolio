import { Outlet } from "react-router";
import Nav from "../components/Nav";

export default function Root() {
  return (
    <div style={{ background: "#f7f8f4", minHeight: "100vh", color: "#171717" }}>
      <Nav />
      <Outlet />
    </div>
  );
}
