import * as React from "react"
import AppRoutes from "../../../AppRoutes";
import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import DeveloperContact from "./DeveloperContact";

const Layout:React.FC = () => {
  return (
    <>
        <Header />
        <Aside />
        <AppRoutes />
        <DeveloperContact />
        <Footer />
    </>
  )
}

export default Layout