import { whatsappUrl,instagramUrl } from './../../../logic/Config';
import whatsappIcon from "./../../../assets/Whatsapp.png";
import instagramIcon from "./../../../assets/instagram.png";

const Aside:React.FC = () => {
  return (
    <aside className="">
    <section>
        <a href={whatsappUrl } target='blank' className='fixed transition-all active:outline-offset-8 hover:scale-105 hover:animate-0 hover:border-green-50 shadow-green-500 shadow-2xl rounded-full border-2 border-green-500 outline-double  right-2 bottom-32 z-50 animate-[pulse_2s_infinite]'>
            <img src={whatsappIcon} alt="Whatsapp Button" />
        </a>
    </section>
    <section>
        <a href={instagramUrl} target='blank' className='fixed transition-all active:outline-offset-8 hover:scale-105 hover:animate-0 hover:border-green-50 shadow-purple-500 shadow-2xl rounded-full border-2 border-purple-500 outline-double  right-2 bottom-10 z-50 animate-[pulse_1s_infinite]'>
            <img src={instagramIcon} alt="Whatsapp Button" />
        </a>
    </section>
    </aside>
  )
}

export default Aside