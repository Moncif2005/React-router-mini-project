import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Home from "./component/Home"
import Main from "./component/Main"
import Err from "./component/err"
import Super from "./component/Super"
function App() {
  
  return (
    <>
    <div>
      <BrowserRouter>
      <Main />
          <Routes>
            <Route path="/" element={<Super />} />
              <Route path="/header" element={<Header/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="*" element={<Err/>} />
          </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
