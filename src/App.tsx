import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Signup from "./components/Signup"
import Answers from "./components/Answers"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/main" element={<Main/>} />
      <Route path="/answers" element={<Answers/>}/>
    </Routes>
    </>
  )
}

export default App
