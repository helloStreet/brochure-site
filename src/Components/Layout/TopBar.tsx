import { Link } from "gatsby"
import React from "react"

const TopBar = () => {
  return (
    <div className="md:max-w-screen-xl bg-white mx-auto flex   justify-start items-center flex-row text-center md:text-left">
      <Link to="/" className="w-1/2 md:max-w-max">
        <h6 className="text-black text-center px-0 sm:px-10 pt-2 text-body-mobile sm:text-bodytablet">
          Regents AC
        </h6>
      </Link>

      <a href="" className=" w-1/2 md:max-w-max text-white bg-forestgreen">
        <h6 className="px-2 sm:px-6 pt-2 text:body-mobile sm:text-bodytablet">
          Regents AC Fashion Event
        </h6>
      </a>
    </div>
  )
}

export default TopBar
