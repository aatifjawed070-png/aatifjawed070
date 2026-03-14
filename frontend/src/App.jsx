import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Courses from "./components/Courses"
import GlowOrbs from "./components/GlowOrbs"
import GridBackground from "./components/GridBackground"

function App(){

return(

<div className="bg-black text-white min-h-screen">

<GlowOrbs/>

<GridBackground/>

<Navbar/>

<Hero/>

<Courses/>

</div>

)

}

export default App