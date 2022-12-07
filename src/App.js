import './App.css'
import Mainpage from './Componant/Mainpage/Mainpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Componant/Nav bar/Header'
import Skills from './Componant/Skills/Skills'
import Services from './Componant/services/services'
import Footer from './Componant/footer/Footer'
import Contact from './Componant/Contact/Contact'
import Projects from './Componant/Projects/Projects'
import Logo from './Componant/Projects/logod'
function App() {
  return (
    <div className="TheMain">
      <div className="Opacity">
        <Router>
          <Routes>
            <Route path="/" exact element={<Mainpage />} />
            <Route path="/Skills" exact element={<Skills />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/logo" exact element={<Logo />} />
            <Route path="/Contact" exact element={<Contact />} />
          </Routes>
          <Header />
        </Router>
      </div>
    </div>
  )
}

export default App
