import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navigation } from "../index";

const Layout = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}

export default Layout