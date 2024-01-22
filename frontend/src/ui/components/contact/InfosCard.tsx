import * as React from "react"
import instagramDarkOutlineImg from "./../../../assets/instagramDarkOutline.png";
import whatsappDarkOutlineImg from "./../../../assets/whatsappDarkOutline.png";
import phoneImg from "./../../../assets/phone.png";

import { instagramUrl,whatsappUrl } from "./../../../logic/Config";

const InfosCard:React.FC = () => {
  return (
    <div className="card w-full bg-base-200 shadow-xl">
      <div className="card-body">
            <div className="flex flex-col gap-3 self-center items-start border-[0.5px] border-gray-300 py-5 sm:py-8 p-0 sm:p-8 rounded-xl shadow-2xl">
            <a href="tel:+905428929862" target={'_blank'} className="btn btn-ghost">
                    <figure>
                        <img className="w-7 h-7 mr-1 sm:mr-6" loading="lazy" src={phoneImg} alt="Whatsapp Icon" />
		                <p>+905428929862</p>
                    </figure>
                </a>
                <a href={instagramUrl} target={'_blank'}  className="btn btn-ghost">
                    <figure>
                        <img className="w-7 h-7 mr-1 sm:mr-6" loading="lazy" src={instagramDarkOutlineImg} alt="Instagram Icon" />
		                <p>@maestrocafe2023</p>
                    </figure>
                </a>
                <a href={whatsappUrl} target={'_blank'} className="btn btn-ghost">
                    <figure>
                        <img className="w-7 h-7 mr-1 sm:mr-6" loading="lazy" src={whatsappDarkOutlineImg} alt="Whatsapp Icon" />
		                <p>+905428929862</p>
                    </figure>
                </a>
            </div>
      </div>
    </div>
  )
}

export default InfosCard