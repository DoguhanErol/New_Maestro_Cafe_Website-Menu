import * as React from "react"
import { Link } from "react-router-dom"

const Faq:React.FC = () => {
  return (
    <>
    <section className="bg bg-base-300 rounded-md shadow-xl m-6 sm:m-0 select-none">
    	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracki text-center uppercase">SSS</p>
    		<h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Sıkça Sorulan Sorular</h2>
    		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-700">
    			<details>
    				<summary className="py-2 outline-none cursor-pointer focus:underline   text-primary-content sm:text-xl font-semibold">Kafeniz hangi saatler arasında açıktır?</summary>
    				<div className=" text-secondary-content px-4 pb-4">
    					<p>Kafemiz sabah 10.00'da açılıyor ve gece 00.30'da kapanıyor.</p>
    				</div>
    			</details>
				<details>
    				<summary className="py-2 outline-none cursor-pointer focus:underline   text-primary-content sm:text-xl font-semibold">Özel etkinlikler için kafeyi kiralayabilir miyiz?</summary>
    				<div className=" text-secondary-content px-4 pb-4">
    					<p>Elbette, daha detaylı bilgi için iletişime geçiniz.</p>
    				</div>
    			</details>
                <details>
    				<summary className="py-2 outline-none cursor-pointer focus:underline   text-primary-content sm:text-xl font-semibold">WiFi hizmetiniz var mı?</summary>
    				<div className=" text-secondary-content px-4 pb-4">
    					<p>Evet, kafemizde ücretsiz WiFi hizmeti bulunmaktadır. Şifre için qr kodu okutabilirsiniz veya garsonlardan yardım alabilirsiniz.</p>
    				</div>
    			</details>
                <details>
    				<summary className="py-2 outline-none cursor-pointer focus:underline   text-primary-content sm:text-xl font-semibold">Kafe içinde laptop kullanabilir miyim?</summary>
    				<div className=" text-secondary-content px-4 pb-4">
    					<p>Tabii ki! Kafemizde çalışmak isteyen misafirlerimiz için ücretsiz WiFi ve priz hizmeti bulunmaktadır.</p>
    				</div>
    			</details>
                <details>
    				<summary className="py-2 outline-none cursor-pointer focus:underline   text-primary-content sm:text-xl font-semibold">Hangi ödeme yöntemlerini kabul ediyorsunuz?</summary>
    				<div className=" text-secondary-content px-4 pb-4">
    					<p>Kafe olarak nakit ve kredi kartı ödemelerini kabul ediyoruz.</p>
    				</div>
    			</details>
				<details>
    				<summary className="py-2 outline-none cursor-pointer focus:underline   text-primary-content sm:text-xl font-semibold">Kafede hangi tip ürünler satıyorsunuz?</summary>
    				<div className=" text-secondary-content px-4 pb-4">
    					<p>Ürünler için <Link className="text-red-200 underline" to={'/menu'} >menüye</Link> göz atabilirsiniz.</p>
    				</div>
    			</details>
                
    		</div>
    	</div>
    </section>
    </>
  )
}

export default Faq