import * as React from "react"
import { Link } from "react-router-dom"

const WelcomeHero:React.FC = () => {
  return (
    <>
        <section className="hero welcome-hero min-h-screen">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hoşgeldiniz</h1>
              <p className="mb-5">Mila Maestro Cafe Websitesine Hoşgeldiniz</p>
              <Link to={'/menu'} className="btn btn-secondary">Menü</Link>
            </div>
          </div>
        </section>
    </>
  )
}

export default WelcomeHero