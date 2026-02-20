import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <p className="text-2xl font-bold text-blue-600">React Blog</p>

                <nav className="flex gap-4">
                    <NavLink to="/" className={({ isActive }) => `px-3 py-1 rounded-md font-medium transition ${isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"}` }>
                        Home
                    </NavLink>

                    <NavLink to="/about" className={({ isActive }) => `px-3 py-1 rounded-md font-medium transition ${isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"}` }>
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;