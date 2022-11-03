import Home from "./pages/Home";
import About from "./pages/About"
import Navbar from "./components/navbar";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";


function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App;
