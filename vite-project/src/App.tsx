import Login from './Components/Login'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import Faculty from './Components/Faculty'
import Courses from './Components/Courses'
import Sections from './Components/Sections'
function App() {
  return (
    <>
    <Navbar></Navbar>
      <Router >
      <Routes>
        <Route  path="/login" element={<Login />}  />
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/data/faculty' element={<Faculty></Faculty>}></Route>
        <Route path='/data/courses' element={<Courses></Courses>}></Route>
         <Route path='/data/sections' element={<Sections></Sections>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
