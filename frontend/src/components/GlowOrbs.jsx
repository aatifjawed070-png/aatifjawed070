import { motion } from "framer-motion"

export default function GlowOrbs(){

  return(

    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
      animate={{y:[0,80,0]}}
      transition={{duration:8,repeat:Infinity}}
      className="absolute w-[500px] h-[500px] bg-indigo-600/30 blur-3xl rounded-full top-10 left-10"
      />

      <motion.div
      animate={{y:[0,-80,0]}}
      transition={{duration:10,repeat:Infinity}}
      className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full bottom-10 right-10"
      />

      <motion.div
      animate={{x:[0,80,0]}}
      transition={{duration:12,repeat:Infinity}}
      className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-3xl rounded-full top-1/2 left-1/2"
      />

    </div>

  )
}