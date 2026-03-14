export default function Background(){
    return(
      <div className="fixed inset-0 -z-10 overflow-hidden">
  
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-3xl"></div>
  
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl"></div>
  
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl"></div>
  
      </div>
    )
  }