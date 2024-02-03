import * as React from "react";
import AddressCard from "./AddressCard";
import InfosCard from "./InfosCard";

const TabCards: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("info");

  const handleTabChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTab(event.target.value);
  };

  return (
    <section role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        aria-selected={selectedTab === "address"}
        aria-controls="addressTab"
        className="tab text-base text-primary"
        aria-label="Adres"
        value="address"
        checked={selectedTab === "address"}
        onChange={handleTabChange}
      />
      <article id="addressTab" role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6" hidden={selectedTab !== "address"}>
        <AddressCard />
      </article>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        aria-selected={selectedTab === "info"}
        aria-controls="infoTab"
        className="tab text-base text-primary"
        aria-label="İletişim"
        value="info"
        checked={selectedTab === "info"}
        onChange={handleTabChange}
      />
      <article id="infoTab" role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6" hidden={selectedTab !== "info"}>
        <InfosCard />
      </article>
    </section>
  );
};

export default TabCards;
