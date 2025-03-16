import { Outlet } from "react-router";
import { Navbar, Footer } from "./components";
const Layout = () => {
  return (
    <div className="flex items-center justify-between flex-col h-screen">
      <Navbar />
      <hr />
      <Outlet className="flex-grow"/>
      <hr />
      <Footer/>    
    </div>
  );
};

export default Layout;
