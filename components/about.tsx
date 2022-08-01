const About = () => {
    return (<section id="about" className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center">
            <div className="hidden md:block container h-72 w-72">
                <img className="rounded-[30px] object-fit drop-shadow-lg" src="/Profilewithbg.JPG"></img>
            </div>
            <div className="flex flex-col justify-center flex-shrink-0 text-white select-none m-6">
                <span className="font-semibold text-5xl tracking-tight">Hi,</span>
                <span className="relative">
                    <span className="font-semibold text-5xl tracking-tight overflow-x-hidden whitespace-nowrap">I'm Janes Horst</span>
                </span>
                <span className="font-light text-sm tracking-tight mt-2 text-gray-400 italic">Software Engineer / Web Developer / Tech Enthusiast</span>
            </div>
        </div>
        <div className="mt-10 flex items-center justify-center flex-wrap">
            <div className="p-6 max-w-sm rounded-lg border shadow-md bg-violet-900 border-gray-700 m-2 h-60">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Frameworks</h5>
                <div className="flex justify-center w-full h-5/6 overflow-y-scroll overflow-x-hidden">
                    <ul className="w-96 mb-3 font-normal text-gray-200">
                        <li className="px-6 py-2 border-gray-200 w-full rounded-t-lg">Angular</li>
                        <li className="px-6 py-2 border-gray-200 w-full">.NET</li>
                        <li className="px-6 py-2 border-gray-200 w-full">Vue.js</li>
                        <li className="px-6 py-2 border-gray-200 w-full">Next.js</li>
                    </ul>
                </div>
            </div>

            <div className="p-6 max-w-sm rounded-lg border shadow-md bg-violet-900 border-gray-700 m-2 h-60">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Programming Languages</h5>
                <div className="flex justify-center w-full h-5/6 overflow-y-scroll overflow-x-hidden">
                    <ul className="w-96 mb-3 font-normal text-gray-200">
                        <li className="px-6 py-2  border-gray-200 w-full rounded-t-lg">C#</li>
                        <li className="px-6 py-2  border-gray-200 w-full">Javascript</li>
                        <li className="px-6 py-2  border-gray-200 w-full">Typescript</li>
                        <li className="px-6 py-2  border-gray-200 w-full">Python</li>
                    </ul>
                </div>
            </div>

            <div className="p-6 max-w-sm rounded-lg border shadow-md bg-violet-900 border-gray-700 m-2 h-60">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Tools</h5>
                <div className="flex justify-center w-full h-5/6 overflow-y-scroll overflow-x-hidden">
                    <ul className="w-96 mb-3 font-normal text-gray-200">
                        <li className="px-6 py-2  border-gray-200 w-full rounded-t-lg">Docker</li>
                        <li className="px-6 py-2  border-gray-200 w-full">Kubernetes</li>
                        <li className="px-6 py-2  border-gray-200 w-full">Git</li>
                        <li className="px-6 py-2  border-gray-200 w-full">VSCode</li>
                        <li className="px-6 py-2  border-gray-200 w-full">Jira</li>
                        <li className="px-6 py-2  border-gray-200 w-full">Confluence</li>
                        <li className="px-6 py-2  border-gray-200 w-full">PowerBI</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>);
}

export default About;