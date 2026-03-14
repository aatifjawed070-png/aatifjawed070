export default function Projects(){

const projects=[
"Portfolio Website",
"E-commerce Store",
"Chat Application",
"Admin Dashboard",
"Weather App",
"Task Manager"
]

return(

<section className="py-24 bg-black/30">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">
Projects You Will Build
</h2>

<div className="grid md:grid-cols-3 gap-8">

{projects.map((project,i)=>(

<div key={i}
className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition"
>

<h3>{project}</h3>

</div>

))}

</div>

</div>

</section>

)

}