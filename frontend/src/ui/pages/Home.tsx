import * as React from "react"
import DiffImages from "../components/home/DiffImages"
import WelcomeHero from "../components/home/WelcomeHero"

const Home:React.FC = () => {
  return (
    <>
    <main>
        <WelcomeHero />
        <div className="divider my-20"></div>
        <DiffImages />
        <div className="divider my-20"></div>

    </main>
    </>
  )
}

export default Home