export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f1420] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold relative">
            Edit with <span className="text-purple-400">Fox</span>
            <span className="absolute left-0 -bottom-1 w-1/2 h-[2px] bg-purple-400 rounded-full"></span>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {["Home", "About", "Services", "Gallery", "Portfolio", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-5 py-2 rounded-full transition duration-200">
            Hire Me
          </button>
          <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-5 py-2 rounded-full transition duration-200">
            Watch Reel
          </button>
        </div>

        {/* Mobile Menu Icon (Optional) */}
        <button className="md:hidden text-gray-300 focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
}
