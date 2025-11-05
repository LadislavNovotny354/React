import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

const Header = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])



    return (
        <header className="relative bg-[url('/img/bg-1.avif')] h-screen bg-black bg-no-repeat bg-cover">
            <nav
                className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center h-24 px-8 transition-all duration-300 ${scrolled
                    ? "bg-black/80 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                    }`}
            >
                <div className="ml-8">
                    <motion.img
                        src="/img/logo-hp.png"
                        alt="Logo HP"
                        className="w-40 mx-auto"
                        initial={{ opacity: 0, y: -50 }}   // start neviditelný a posunutý nahoru
                        animate={{ opacity: 1, y: 0 }}     // konečný stav: plně viditelný na místě
                        transition={{ duration: 1, delay: 0.3 }} // délka animace + malé zpoždění
                    />
                </div>

                <div className="hidden xl:block">
                    <ul className="flex flex-row text-20px">
                        <li className="py-1 px-2 text-white hover:bg-slate-400 hover:rounded-xl cursor-pointer">
                            Philosophers Stone
                        </li>
                        <li className="py-1 px-2 text-white hover:bg-slate-400 hover:rounded-xl cursor-pointer">
                            Chamber of Secrets
                        </li>
                        <li className="py-1 px-2 text-white hover:bg-slate-400 hover:rounded-xl cursor-pointer">
                            Prisoner of Azkaban
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-row space-x-1 mr-2 font-bold text-20px text-white">
                        <li className="cursor-pointer hover:rounded-xl hover:bg-slate-400 py-1 px-2">
                            T-shirts
                        </li>
                        <li className="cursor-pointer hover:rounded-xl hover:bg-slate-400 py-1 px-2">
                            Mugs
                        </li>
                        <li className="cursor-pointer hover:rounded-xl hover:bg-slate-400 py-1 px-2">
                            Books
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="pt-40 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-5xl">Philosophers Stone</h1>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur.</p>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-20 flex flex-col items-center w-full lg:flex-row lg:justify-center lg:space-x-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <button className="mt-2 uppercase bg-blue-600 w-80 text-white rounded-full h-10">
                    Objednat
                </button>
                <button className="mt-2 uppercase bg-blue-950 w-80 text-white rounded-full h-10">
                    Více informací
                </button>
            </motion.div>

            <div className="text-white absolute bottom-5 w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 animate-bounce mx-auto"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                    />
                </svg>
            </div>
        </header>
    )
}

export default Header 