import { Code } from "lucide-react"

export default function Navbar(){

  return(

    <nav className="fixed w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center backdrop-blur bg-white/5 border border-white/10 rounded-xl px-6 py-3">

          <div className="flex items-center gap-2 font-bold text-indigo-400">
            <Code size={24}/>
            DevVerse
          </div>

          <div className="hidden md:flex gap-8 text-gray-300">

            <a className="hover:text-white">Courses</a>
            <a className="hover:text-white">Paths</a>
            <a className="hover:text-white">Projects</a>
            <a className="hover:text-white">Community</a>

          </div>

          <button className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">
            Login
          </button>

        </div>

      </div>

    </nav>

  )

}