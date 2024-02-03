
const GoogleMaps:React.FC = () => {
  return (
    <section className="relative text-right h-[500px] w-[100%]" id="#googlemaps">
        <article className=" bg-none h-auto w-auto">
            <iframe title="Google Maps Location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10427.541042716148!2d27.78082689320591!3d37.28909182004238!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14befbd342d5792f%3A0x7b84a408931e42d7!2sMila%20Maestro!5e0!3m2!1str!2str!4v1705922235921!5m2!1str!2str" width="100%" height="500"   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </article>
    </section>
  )
}

export default GoogleMaps