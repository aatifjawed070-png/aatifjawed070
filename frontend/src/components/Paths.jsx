export default function Paths(){

const paths=[
"Frontend Developer",
"Backend Developer",
"Full Stack Developer",
"Data Scientist"
]

return(

<section className="py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">
Learning Paths
</h2>

<div className="grid md:grid-cols-4 gap-8">

{paths.map((path,i)=>(

<div key={i}
className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition"
>

<h3 className="text-lg font-semibold">{path}</h3>

</div>

))}

</div>

</div>

</section>

)

}