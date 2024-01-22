import TabCards from "../components/contact/TabCards"
import GoogleMaps from "../components/contact/GoogleMaps"


const Contact:React.FC = () => {
  return (
    <main>
      <hr className="my-5" />
      <TabCards />
      <hr className="divider my-20" />
      <GoogleMaps />
      <hr className="divider my-20" />
    </main>
  )
}

export default Contact