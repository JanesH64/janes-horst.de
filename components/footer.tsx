import React from "react";

const Footer = () => {
    return (
        <div className="mt-12 mt-18 pb-18 py-6">
            <div className="mx-auto text-gray-400">
                <div className="h-px mb-10 bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
                <div className="flex flex-col justify-between items-center">
                    <p>Built with Next.js, Tailwind and Docker</p>
                    <div className="flex flex-wrap pt-2 space-x-4 space-x-2 font-medium">
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