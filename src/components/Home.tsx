import { useState } from "react"
import Leftbar from "./Leftbar"
import Rightbar from "./Rightbar"

type seachProp = {
  search:any
}

const Home = (props:seachProp) => {

  const [menu,setMenu] = useState("")

  return (
    <div className="h-full w-screen bg-gray-100 grid grid-cols-6">
        <div>
        <Leftbar setMenu={setMenu}/>
        </div>
        <div className="col-span-3">
        <Rightbar search={props?.search} menu={menu}/>
        </div>
    </div>
  )
}

export default Home
