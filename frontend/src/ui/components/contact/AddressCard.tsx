import * as React from "react"
import locationImg from "./../../../assets/location.png";


    const scrollToMap = () => {
      const componentElement = document.getElementById('#googlemaps');
      if (componentElement) {
        componentElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

const AddressCard:React.FC = () => {
  return (
        <div className="card w-full bg-base-200 shadow-xl ">
            <div className="card-body ">
            <div className="flex flex-col gap-3 my-5 self-center items-start border-[0.5px] border-gray-300 py-5 sm:py-8 p-0 sm:p-8 rounded-xl shadow-2xl">
            <a href="#googlemaps" onClick={scrollToMap} className="btn btn-ghost max-w-[288.5px] h-auto my-2">
                    <figure>
                        <img className="w-10 h-10 mr-1 sm:mr-6" loading="lazy" src={locationImg} alt="Whatsapp Icon" />
		                <p className="leading-6">Cumhuriyet Mahallesi, 106/1A, Ahmet Yesevi Cd., 48260 Milas/Muğla</p>
                    </figure>
            </a>
            </div>
            </div>
        </div>
  )
}

export default AddressCard