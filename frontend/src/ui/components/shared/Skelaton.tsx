import * as React from "react"

const Skelaton:React.FC = () => {
  return (
    <>
<div className="flex items-center justify-center w-full h-full ">
  <section className="flex flex-col  m-2 mb-24  p-6 space-y-4 w-full  sm:w-[42rem] sm:p-10 divide-gray-500 bg-[#696161de] text-gray-100  rounded-md ">
            <div className="skeleton bg-[#696161de] h-36"></div>
  </section>
</div>
    </>
  )
}

export default Skelaton