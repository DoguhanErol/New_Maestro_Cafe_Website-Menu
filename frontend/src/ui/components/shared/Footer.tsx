import logoImg from './../../../assets/logo.png';
import instagramDarkImg from "../../../assets/instagramDark.png";
import whatsappDarkImg from "../../../assets/whatsappDark.png";
import {whatsappUrl,instagramUrl} from '../../../logic/Config';
import { Link } from 'react-router-dom';

const Footer:React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-primary-content shadow-xl rounded-md z-50 ">
      {/* Logo and Copyright */}
      <aside>
        <Link className='btn btn-ghost h-auto' to={'/'}>
          <img className='w-32' src={logoImg} alt="" />
        </Link>
        <p className="font-bold">
        <span className='char-special text-base'>M</span>ila <span className='char-special text-base'>M</span>aestro Cafe<br/><span className='char-special text-base'>2017</span> yılından beri kaliteli kahve keyfi sunuyoruz
        </p> 
        <p>Copyright © 2024</p>
      </aside>
      {/* Divider Line */}
      <div className="flex flex-col w-full">
          <div className="divider">Sosyal Medya</div>
      </div>
      {/* Social Media Accounts */}
      <nav>
        <section className="grid grid-flow-col gap-6">
          <a href={instagramUrl} target='blank'> <img src={instagramDarkImg} alt="Instagram Icon" /></a>
          <a href={whatsappUrl}  target='blank'> <img src={whatsappDarkImg} alt="Whatsapp Icon" /></a>
        </section>
      </nav>
    </footer>
  )
}

export default Footer