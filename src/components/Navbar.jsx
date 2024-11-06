import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 justify-start">
            <div className="flex space-x-4 justify-start">
                
                    <Link to="/" className="text-white hover:text-gray-400">Home</Link>
               
                
                    <Link to="/about" className="text-white hover:text-gray-400">About</Link>
                
                
                    <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
                
            </div>
        </nav>
    )
}

export default Navbar;