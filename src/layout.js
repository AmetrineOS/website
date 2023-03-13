import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar";
import "./layout.scss";

function Layout() {
  return (
    <>
      <Nav />
      <div className="page">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
