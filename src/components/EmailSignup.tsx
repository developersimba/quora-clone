import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth"
import { auth } from "../firebase/setup"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


type emailType = {
    setEmailSignup:any
}


const EmailSignup = (props:emailType) => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const Signup = async() =>{
    try{
      await createUserWithEmailAndPassword(auth,email,password)
      toast.success("Please verify the mail Id")
      onAuthStateChanged(auth,(user:any)=>{
        sendEmailVerification(user)
      })
    }catch(err){
      console.error(err)
    }
  }

  console.log(auth)


  return (
    <>
    <ToastContainer/>
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-zinc-950 bg-opacity-80 transition-opacity"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-6/12">
        <div className="bg-white pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:items-start">
            <h1 className="cursor-pointer" onClick={()=> props?.setEmailSignup(false)}>X</h1>
            <h1 className="mt-3 font-semibold text-lg">Sign up</h1>
            <h1 className="mt-3 text-sm font-semibold">Email</h1>
            <input onChange={(e)=> setEmail(e.target.value)}  placeholder="Your Email" className="mt-3  outline-blue-400 border border-spacing-1 p-2 w-full"/>
            <h1 className="mt-3 text-sm font-semibold">Password</h1>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Your Pasword" className="mt-3 outline-blue-400 border border-spacing-1 p-2 w-full"/>
          </div>
          <hr className="mt-20"/>
          <button onClick={Signup} className="bg-blue-500 text-white rounded-full p-2 w-20 mt-3">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
   
  )
}

export default EmailSignup
