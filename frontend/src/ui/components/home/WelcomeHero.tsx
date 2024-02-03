import * as React from "react"
import { Link } from "react-router-dom"
import welcomeHeroImg from "../../../assets/welcomeHero.webp";

const WelcomeHero:React.FC = () => {
  return (
    <>
        <section className="hero min-h-screen shadow-xl rounded-sm">
          <img loading="lazy" className="w-full h-full" src={welcomeHeroImg} alt="Hero Image Cafe Picture" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h2 className="mb-5 text-4xl font-bold">Hoşgeldiniz</h2>
              <p className="mb-5 ">Mila Maestro Cafe Websitesine Hoşgeldiniz</p>
              <Link to={'/menu'} className="btn btn-secondary">Menü</Link>
            </div>
          </div>
        </section>
    </>
  )
}

export default WelcomeHero