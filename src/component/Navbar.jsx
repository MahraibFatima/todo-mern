const Navbar = () => {
  return (
    <nav className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B7B89F] to-[#CBCBCB]"></div>
    
      <div className="relative px-4 py-3 md:px-8 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <button className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
            <span className="w-6 h-0.5 bg-black/80 rounded"></span>
            <span className="w-6 h-0.5 bg-black/80 rounded"></span>
            <span className="w-6 h-0.5 bg-black/80 rounded"></span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-white/95 rounded-lg flex items-center 
                          justify-center text-xl md:text-2xl font-bold shadow-sm">
              ✓
            </div>
            <span className="text-black font-semibold text-lg md:text-xl hidden sm:block">
              TaskFlow
            </span>
          </div>
          
          <div className="text-center absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-black text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
              Todo App
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-black/90 text-sm md:text-base font-medium hidden md:block">
              Stay Organized
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar