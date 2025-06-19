import React from 'react'

const NavBar:React.FC = () => {
    return (
        <nav className="bg-gradient-to-r from-[var(--primary-color)] to-amber-400 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold">Recipe Generator</h1>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar