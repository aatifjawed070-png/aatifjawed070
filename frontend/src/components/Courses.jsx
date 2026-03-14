import { motion } from "framer-motion"

export default function Courses(){

const courses=[
"HTML & CSS",
"JavaScript",
"React",
"Node.js",
"Python",
"Full Stack"
]

return(

<section className="py-32">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-20">
Explore DevVerse Courses
</h2>

<div className="grid md:grid-cols-3 gap-10">

{courses.map((course,i)=>(

<motion.div
key={i}
whileHover={{scale:1.08}}
whileTap={{scale:0.98}}
className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-indigo-500 transition"
>

<h3 className="text-xl font-semibold mb-4">
{course}
</h3>

<p className="text-gray-400 text-sm">
Build real projects and master {course}.
</p>

</motion.div>

))}

</div>

</div>

</section>

)

}