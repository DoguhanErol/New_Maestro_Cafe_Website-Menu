import * as React from "react"
import AppRoutes from "../../../AppRoutes";
import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";

const Layout:React.FC = () => {
  return (
    <>
        <Header />
        <Aside />
        <AppRoutes />
        <Footer />
    </>
  )
}

export default Layout