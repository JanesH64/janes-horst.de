const About = () => {
    return (<section id="about">
        <div className="flex items-center justify-center space-x-6">
            <div className="hidden md:block container h-72 w-72">
                <img className="rounded-[30px] object-fit drop-shadow-lg" src="/Profilewithbg.JPG"></img>
            </div>
            <div className="flex flex-col justify-center flex-shrink-0 text-white select-none mr-6 space-y-3 ">
                <span className="font-semibold text-5xl tracking-tight">Hi,</span>
                <span className="relative">
                    <span className="font-semibold text-5xl tracking-tight overflow-x-hidden whitespace-nowrap">I'm Janes Horst</span>
                    <span className=""></span>
                </span>
            </div>
        </div>
        
    </section>);
}

export default About;