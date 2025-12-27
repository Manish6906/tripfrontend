import { BrowserRouter, Route, Routes } from "react-router-dom"
import Instruction from './Componenets/trip/Instructions'
import TripForm from './Componenets/trip/TripForm'
import Preview from './Componenets/trip/Preview'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Instruction />} />
        <Route path="/form" element={<TripForm />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
