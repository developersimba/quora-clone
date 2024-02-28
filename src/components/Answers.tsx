import Avatar from "react-avatar"
import { auth, storage } from "../firebase/setup"
import account from "../assets/account.png"
import { collection, doc, getDocs } from "firebase/firestore"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const Answers = () => {

    const location = useLocation()
    console.log(location)

    const [answerData,setAnswerData] = useState<any>([])

    const answerDoc = doc(storage,"questions",`${location?.state?.id ? location?.state?.id : Math.random()}`)
    const answerRef = collection(answerDoc,"answers")

    const getAnswer = async() =>{
        try{
          const data = await getDocs(answerRef)
          const filteredData = data?.docs?.map((doc:any)=>({
              ...doc?.data(),
              id:doc?.id
          }))
          setAnswerData(filteredData)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        getAnswer()
    },[])

    console.log(answerData)

  return (
    <>
    {answerData?.map((data:any)=>{
      return (
        <div>
        <div className="flex">
        {data?.email ? <Avatar round size="35"  className="mt-0.5 ml-1 cursor-pointer" name={data.email ?? account}/>
      : <Avatar round size="25" className="mt-0.5 ml-1 cursor-pointer" src={account}/>}
      <h1 className="ml-4 mt-3 font-bold">{data?.email.substring(0,data.email.indexOf("@"))}</h1>
        </div>
        <h1 className="ml-3 mt-3">{data?.ans}</h1>
    </div>
      )
    })}
    </>
    
  )
}

export default Answers
