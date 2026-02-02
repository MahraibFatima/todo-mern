import { Link } from "react-router-dom"

const Navbar = () => {
  const isLoggedIn = false; // Replace with actual login state logic
  return (
    <nav className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#B7B89F] to-[#CBCBCB]"></div>
    
      <div className="relative px-4 py-3 md:px-8 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <button className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
            <span className="w-6 h-0.5 bg-black/80 rounded"></span>
            <span className="w-6 h-0.5 bg-black/80 rounded"></span>
            <span className="w-6 h-0.5 bg-black/80 rounded"></span>
          </button>
          
          <div className="flex items-center gap-3">
            <Link 
              className="w-9 h-9 md:w-10 md:h-10 bg-white/95 rounded-lg flex items-center justify-center text-xl md:text-2xl font-bold shadow-sm" 
              to="/"
            >
              ✓
            </Link>
          </div>
          
          <div className="text-center absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-black text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
              Todos
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              className="text-black/90 underline bold text-sm md:text-base font-medium hidden md:block rounded-lg px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors"
              to="/todo"
            >
              todos
            </Link>
             {!isLoggedIn ? (
              <Link 
                className="text-black/90 rounded border text-sm md:text-base font-medium hidden md:block rounded-lg px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors"
                to="/login"
              >
                Login
              </Link>
            ) : (
              <Link 
                className="text-black/90 rounded border text-sm md:text-base font-medium hidden md:block rounded-lg px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors"
                to="/logout"
              >
                Logout
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar