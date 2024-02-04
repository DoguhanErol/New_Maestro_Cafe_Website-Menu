import * as React from "react"
import diff1 from './../../../assets/diff1.webp'
import diff2 from './../../../assets/diff2.webp'
import diff3 from './../../../assets/diff3.webp'

const Carousel:React.FC = () => {
  return (
<div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
        <img src={diff1}  alt="Tailwind CSS Carousel component" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div> 
    </div>
    <div id="slide2" className="carousel-item relative w-full">
            <img src={diff2}  alt="Tailwind CSS Carousel component" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div> 
    </div>
    <div id="slide3" className="carousel-item relative w-full">
            <img src={diff3}  alt="Tailwind CSS Carousel component" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
        </div> 
    </div> 
    </div>

  )
}

export default Carousel