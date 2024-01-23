import TabCards from "../components/contact/TabCards"
import GoogleMaps from "../components/contact/GoogleMaps"
import Faq from "../components/contact/Faq"


const Contact:React.FC = () => {
  return (
    <main>
      <hr className="my-5" />
      <TabCards />
      <hr className="divider my-20" />
      <GoogleMaps />
      <hr className="divider my-20" />
      <Faq />
      <hr className="my-10" />
    </main>
  )
}

export default Contact