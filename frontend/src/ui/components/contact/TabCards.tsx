import * as React from "react"
import AddressCard from "./AddressCard"
import InfosCard from "./InfosCard"

const TabCards:React.FC = () => {
  return (
    <section role="tablist" className="tabs tabs-lifted">
      <input type="radio" name="my_tabs_2" role="tab" className="tab text-base text-primary" aria-label="Adres"  checked  />
      <article role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <AddressCard />
      </article>

      <input type="radio" name="my_tabs_2" role="tab" className="tab text-base text-primary" aria-label="İletişim"  checked />
      <article role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <InfosCard />
      </article>
    </section>
  )
}

export default TabCards