import * as React from "react"
import diff1 from './../../../assets/diff1.jpg'
import diff2 from './../../../assets/diff2.jpg'

const DiffImages:React.FC = () => {
  return (
    <>
        <section className="diff aspect-[16/9] max-h-[32rem]">
          <figcaption className="diff-item-1">
            <img alt="daisy" src={diff1} />
          </figcaption>
          <figcaption className="diff-item-2">
            <img alt="daisy" src={diff2} />
          </figcaption>
          <div className="diff-resizer"></div>
        </section>
    </>
  )
}

export default DiffImages