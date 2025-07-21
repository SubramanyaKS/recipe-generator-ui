import React from 'react'
import { useAuth } from '../hooks/useAuth';

const NavBar:React.FC = () => {
    const {currentUser,logout} = useAuth();
    return (
        <nav className="bg-gradient-to-r from-[var(--primary-color)] to-amber-400 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold">Recipe Generator</h1>
                    </div>
                </div>
                <div className="flex justify-end">
                    {/* logout */}
                    {currentUser ? (
                        <button
                            onClick={logout}
                            className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded"
                        >
                            Logout
                        </button>
                    ) : (
                        <span className="text-gray-300">Not logged in</span>
                    )}
                    </div>
            </div>
        </nav>
    )
}

export default NavBar