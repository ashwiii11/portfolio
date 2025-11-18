import About from "./components/About/About"
import Footer from "./components/footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/Projects/projects"
import Skills from "./components/Skills/Skills"

 
function App() {

  

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
    

    
      
    </div>
  )
}

export default App
