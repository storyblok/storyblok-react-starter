import React from "react";
import Head from "./Head";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="bg-gray-300">
    <Head />
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;
