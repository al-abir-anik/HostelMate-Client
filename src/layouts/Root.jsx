import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';






const Root = () => {

  const location = useLocation();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import('flyonui/flyonui');
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex flex-col flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;