import React from "react"

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-6 mb-6 bg-[#0e1212]">
            <nav className="sticky top-0 z-20 flex items-center justify-between flex-wrap mx-10">
                <div className="flex items-center flex-shrink-0 text-violet-600 mr-6 border-2 border-violet-600">
                    <span className="font-semibold text-3xl tracking-tight m-1">JH</span>
                </div>
                <div className="block hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow flex items-center w-auto">
                    <div className="flex-grow"></div>
                    <div>
                        <a href="#about" className="block mt-4 inline-block mt-0 hover:text-violet-600 text-slate-100 mr-4 duration-300">
                            About
                        </a>
                        <a href="#projects" className="block mt-4 inline-block mt-0 hover:text-violet-600 text-slate-100 mr-4 duration-300">
                            Projects
                        </a>
                        <a href="mailto:mail@janes-horst.de" className="block mt-4 inline-block mt-0 hover:text-violet-600 text-slate-100 duration-300">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;