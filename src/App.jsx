import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Instructors from './pages/Instructors'


function App() {

  return (
    <>

    
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/instructors' element={<Instructors/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
