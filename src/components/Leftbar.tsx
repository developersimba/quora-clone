import finance from "../assets/finance.jpg"
import health from "../assets/health.jpg"
import living from "../assets/living.jpg"
import science from "../assets/science.jpg"
import fam from "../assets/fam.jpg"
import tech from "../assets/tech.jpg"
import animals from "../assets/animals.jpg"

type MenuProp = {
  setMenu:any
}


const Leftbar = (props:MenuProp) => {
  return (
    <div className="pl-20 pt-5 text-sm">
      <div className="flex cursor-pointer" onClick={()=> props?.setMenu("finance")}>
        <img src={finance} className="w-4 h-4 rounded-sm"/>
        <h1 className="ml-3 text-gray-500">Finance</h1>
      </div>
      <div className="flex mt-5 cursor-pointer" onClick={()=> props?.setMenu("living")}>
        <img src={living} className="w-4 h-4 rounded-sm"/>
        <h1 className="ml-3 text-gray-500">Healthy living</h1>
      </div>
      <div className="flex mt-5 cursor-pointer" onClick={()=> props?.setMenu("science")}>
        <img src={science} className="w-4 h-4 rounded-sm"/>
        <h1 className="ml-3 text-gray-500">Science</h1>
      </div>
      <div className="flex mt-5 cursor-pointer" onClick={()=> props?.setMenu("health")}>
        <img src={health} className="w-4 h-4 rounded-sm"/>
        <h1 className="ml-3 text-gray-500">Health</h1>
      </div>
      <div className="flex mt-5 cursor-pointer" onClick={()=> props?.setMenu("tech")}>
        <img src={tech} className="w-4 h-4 rounded-sm"/>
        <h1 className="ml-3 text-gray-500">technology</h1>
      </div>
      <div className="flex mt-5 cursor-pointer" onClick={()=> props?.setMenu("animals")}>
        <img src={animals} className="w-4 h-4 rounded-sm"/>
        <h1 className="ml-3 text-gray-500">Animals</h1>
      </div>
      <div className="flex mt-5 cursor-pointer" onClick={()=> props?.setMenu("fam")}>
        <img src={fam} className="w-4 h-4 rounded-sm"/>
        <h1 className="ml-3 text-gray-500">Family Advice</h1>
      </div>
      <hr className="mt-3"/>
      <h1 className="mt-3 text-gray-400 text-sm">About . Careers . </h1>
      <h1 className="text-gray-400 text-sm">Terms . Policies .</h1>
      <h1  className="text-gray-400 text-sm">Acceptable use</h1>
    </div>
  )
}

export default Leftbar
