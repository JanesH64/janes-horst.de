import React from "react";

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 sm:pb-18 sm:py-12 py-6">
            <div className="px-4 mx-auto text-gray-400">
                <div className="h-px mb-10 bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p>Built with Next.js, Tailwind and Docker</p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="https://www.xing.com/profile/Janes_Horst"
                            className={"transition-colors hover:text-violet-600 duration-300"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Xing
                        </a>
                        <a
                            href="https://www.linkedin.com/in/janes-horst-7555691b8"
                            className={"transition-colors hover:text-violet-600 duration-300"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/JanesH64"
                            className={"transition-colors hover:text-violet-600 duration-300"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;