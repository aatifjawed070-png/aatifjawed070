import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Courses from "./components/Courses"
import GlowOrbs from "./components/GlowOrbs"
import GridBackground from "./components/GridBackground"
import Paths from "./components/Paths"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App(){

return(

<div className="bg-black text-white min-h-screen">

<GlowOrbs/>

<GridBackground/>

<Navbar/>

<Hero/>

<Courses/>
<Paths/>

<Projects/>

<Footer/>

</div>

)

}

export default App