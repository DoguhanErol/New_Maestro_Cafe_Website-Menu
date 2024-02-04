import * as React from "react"
import Carousel from "../components/home/Carousel"
import ReservationHero from "../components/home/ReservationHero"
import Stats from "../components/home/Stats"
import WelcomeHero from "../components/home/WelcomeHero"

const Home:React.FC = () => {
  return (
    <>
    <main>
        <WelcomeHero />
        <hr className="divider my-20" />
        <ReservationHero />
        <hr className="divider my-20" />
        <Carousel />
        <hr className="divider my-20" />
        <Stats />
        <hr className="my-10" />

    </main>
    </>
  )
}

export default Home