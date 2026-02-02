const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-[#B7B89F] to-[#CBCBCB] mt-auto fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-8">
        <h1 className="text-center text-black/80 text-sm font-medium">
          &copy; {new Date().getFullYear()} 
          todo list ~ Jami.
        </h1>
      </div>
    </div>
  )
}

export default Footer