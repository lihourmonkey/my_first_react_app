import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {

    const [isActiveNavbar, setIsActiveNavbar] = useState(false)

    return (
        <>

            <header className="bg-white z-40 shadow-md font-rubik flex items-center justify-between py-4 px-4 lg:px-40">
                <div className="cursor-pointer flex items-center gap-2">
                    <button onClick={() => setIsActiveNavbar(true)} className="cursor-pointer inline-block lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-secondary active:text-gray-400 transition-all duration-300 ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <h2 className="font-bold text-2xl text-primary">JKJ Store</h2>
                </div>

                <ul className="lg:flex gap-4 items-center hidden">
                    <li>
                        <NavLink to="/" className="px-3 py-2 rounded-lg aria-[current=page]:bg-secondary  transition-all duration-300 ease">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product" className="px-3 py-2 rounded-lg aria-[current=page]:bg-secondary transition-all duration-300 ease">Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="px-3 py-2 rounded-lg aria-[current=page]:bg-secondary transition-all duration-300 ease">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="px-3 py-2 rounded-lg aria-[current=page]:bg-secondary transition-all duration-300 ease">About</NavLink>
                    </li>
                </ul>

                <div className="flex gap-4">

                    <button className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-secondary transition">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>

                    <button className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-secondary transition">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>

                    <button className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-secondary transition">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </button>

                </div>

            </header>

            <header className={`${isActiveNavbar ? 'left-0' : '-left-full'} fixed top-0 z-50 pt-5 px-6 bg-primary text-white w-65 min-h-screen transition-all duration-300 ease-in-out`}>
                <div className="flex justify-end">
                    <button onClick={() => setIsActiveNavbar(false)} className="cursor-pointer border border-gray-500 border-dashed p-1.5 rounded-full hover:bg-gray-700 transition-all duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col mt-6 font-rubik">
                    <a href="/" className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out">+Home</a>
                    <a href="/product" className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out">+Product</a>
                    <a href="/contact" className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out">+Contact</a>
                    <a href="about" className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out">+About</a>
                </div>
            </header>

        </>
    )
}

export default Header