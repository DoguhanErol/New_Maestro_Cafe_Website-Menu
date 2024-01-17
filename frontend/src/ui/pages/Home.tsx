import * as React from "react"
import DiffImages from "../components/home/DiffImages"
import ReservationHero from "../components/home/ReservationHero"
import Stats from "../components/home/Stats"
import WelcomeHero from "../components/home/WelcomeHero"

const Home:React.FC = () => {
  return (
    <>
    <main>
        <WelcomeHero />
        <div className="divider my-20"></div>
        <ReservationHero />
        <div className="divider my-20"></div>
        <DiffImages />
        <div className="divider my-20"></div>
        <Stats />
    </main>
    </>
  )
}

export default Home