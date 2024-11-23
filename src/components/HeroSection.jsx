import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center max-w-4xl">VirtualR build tools <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> for developers</span></h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"> Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immersive reality!</p>
            <div className="flex space-x-6 my-6 xs:flex-wrap xs:justify-center gap-5" >
                <a
                    href="#"
                    className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                    Start for free
                </a>
                <a href="#" className="py-2 px-3 border rounded-md">
                    Documentation
                </a>
            </div>
            <div className="flex my-6 lg:flex-nowrap  md:flex-wrap sm:flex-wrap  md:justify-center sm:justify-center  xs:justify-center xs:flex-wrap " >
                <video autoPlay muted loop className="rounded-lg w-3/6  border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video1} type="video/mp4"/>
                        your browser doesnot support the video
                </video>

                <video autoPlay muted loop className="rounded-lg w-3/6 md:w-50 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video2} type="video/mp4"/>
                        your browser doesnot support the video2
                </video>
            </div>
        </div>

    );
}

export default HeroSection