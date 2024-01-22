import * as React from "react"
import { Link } from "react-router-dom";
import heroImg from '../../../assets/hero.webp';
const ReservationHero:React.FC = () => {
  return (
    <>
        <section className="hero min-h-96 bg-base-300 shadow-xl rounded-md">
          <article className="hero-content flex-col lg:flex-row-reverse">
            <img src={heroImg} className="max-w-56 sm:max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h2 className="text-3xl font-bold">Etkinlik Rezarvasyonu</h2>
              <p className="py-6 text-left">Merhaba kafeyi etkinlikler için kiralamak ve benzer durumlar için iletişime geçebilirsiniz. Doğum günleri, düğün resepsiyonları, iş toplantıları ve daha fazlası için özel tekliflerimiz bulunmaktadır. </p>
              <Link to={'/iletisim'} className="btn btn-secondary">İletişim</Link>
            </div>
          </article>
        </section>
    </>
  )
}

export default ReservationHero