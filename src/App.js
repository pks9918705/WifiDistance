import { Routes, Route } from "react-router-dom"
import Wifi from "./wifi"
 
 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Wifi/> } />
         
         
      </Routes>
    </div>
  )
}

export default App