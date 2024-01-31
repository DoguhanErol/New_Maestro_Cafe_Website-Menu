import * as React from "react"

const Loading:React.FC = () => {
  return (
    <section className="flex justify-center items-center w-full h-[50vh] ">
        <div className="scale-150">
            <span className="loading loading-ring loading-lg "></span>
        </div>
    </section>
  )
}

export default Loading