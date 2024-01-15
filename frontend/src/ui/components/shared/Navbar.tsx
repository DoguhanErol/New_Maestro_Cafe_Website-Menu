import * as React from "react"
import { Link } from "react-router-dom";
import logoImg from "../../../assets/logo.png";
import { adminLoginUrl } from '../../../logic/Config';

const Navbar:React.FC = () => {

  return (
        <nav aria-label="main" role="navigation" className="navbar bg-base-300 rounded-sm">
          <section className="navbar-start">

             {/* Mobile */}
            <div className="dropdown">
              <figcaption tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </figcaption>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link className="text-lg text-neutral hover:text-red-700" to="/">Ana Sayfa</Link></li>
                <li><Link className="text-lg text-neutral hover:text-red-700" to="/iletisim">İletişim</Link></li>
                <li><Link className="text-lg text-neutral hover:text-red-700" to="/menu">Menü</Link></li>
              </ul>
            </div>
            {/* Logo */}
            <a href="/" className="btn btn-ghost text-xl w-auto h-auto">
            <img className=" w-16" src={logoImg} alt="Maestro Logo" />
            <h2 className="text-neutral"> <span className="char-special text-2xl">M</span>aestro Cafe</h2>
            </a>

          </section>

            {/* Desktop */}
      <section className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
            <li><Link className="text-neutral hover:text-red-700" to="/">Ana Sayfa</Link></li>
            <li><Link className="text-neutral hover:text-red-700" to="/iletisim">İletişim</Link></li>
            <li><Link className="text-neutral hover:text-red-700" to="/menu">Menü</Link></li>
        </ul>
      </section>

            {/* Desktop & Mobile*/}
          <section className="navbar-end">
            <Link to={adminLoginUrl} className="btn btn-primary text-gray-200 text-base">Admin Girişi</Link>
          </section>
        </nav>
  )
}

export default Navbar