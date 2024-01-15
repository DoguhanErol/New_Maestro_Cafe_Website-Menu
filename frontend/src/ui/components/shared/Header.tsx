import * as React from "react"
import Breadcrumbs from "./Breadcrumbs"
import Navbar from "./Navbar"

const Header:React.FC = () => {
  return (
    <header className="z-50">
        <Navbar />
        <Breadcrumbs />
    </header>
  )
}

export default Header