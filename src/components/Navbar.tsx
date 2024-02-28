import bell from "../assets/bell.png"
import globe from "../assets/globe.png"
import group from "../assets/group.png"
import clipboard from "../assets/clipboard.png"
import edit from "../assets/edit.png"
import home from "../assets/home.png"
import quora from "../assets/quora.png"
import lens from "../assets/lens.png"
import Avatar from "react-avatar"
import { auth } from "../firebase/setup"
import account from "../assets/account.png"
import PostPopup from "./PostPopup"
import { useState } from "react"

type searchProp = {
  setSearch:any
}


const Navbar = (props:searchProp) => {

  const [post,setPost] = useState(false)


  return (
    <div className="flex pl-20 pt-3 shadow-md h-14 w-screen">
      <img src={quora} className="w-24 h-7"/>
      <img src={home} className="w-7 h-7 ml-10 cursor-pointer"/>
      <img src={clipboard} className="w-7 h-7 ml-10 cursor-pointer"/>
      <img src={edit} className="w-7 h-7 ml-10 cursor-pointer"/>
      <img src={group} className="w-7 h-7 ml-10 cursor-pointer"/>
      <img src={bell} className="w-7 h-7 ml-10 cursor-pointer"/>
      <div className="flex border border-spacing-1 h-9 ml-10 w-72 p-1 cursor-pointer">
        <img src={lens} className="w-3 h-3 mt-2 ml-3"/>
        <input onChange={(e)=> props?.setSearch(e.target.value)} placeholder="Search Quora" className="ml-2 outline-none"/>
      </div>
      <h1 className="text-sm border border-spacing-1 rounded-full p-2 ml-5 h-9">Try Quora+</h1>
      <img src={globe} className="w-5 h-5 ml-5 mt-2 cursor-pointer"/>
      {auth?.currentUser?.emailVerified ? <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer" name={auth?.currentUser?.email ?? account}/>
      : <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer" src={account}/>}
      <h1 onClick={()=> setPost(true)} className="bg-red-700 rounded-full text-sm cursor-pointer text-white w-36 pl-6 ml-6 pt-2 h-9">Add question</h1>
      {post && <PostPopup setPost={setPost}/>}
    </div>
  )
}

export default Navbar
