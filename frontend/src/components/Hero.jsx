import { motion } from "framer-motion"

export default function Hero(){
  return(
    <section className="pt-36 pb-28 text-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="text-6xl font-bold leading-tight"
        >
          Build Your Future in the
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {" "}DevVerse
          </span>
        </motion.h1>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          Learn coding, build real-world projects, and launch your developer career with our immersive learning platform.
        </p>

        <div className="mt-10 flex justify-center gap-6">

          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Start Learning
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition">
            Explore Courses
          </button>

        </div>

      </div>

    </section>
  )
}