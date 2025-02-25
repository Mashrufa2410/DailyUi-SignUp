import React from "react";
import ServicesList from "./Services/ServicesList";

const Home = () => {
    return (
        <div className="px-5 md:px-10">
            <header className="relative">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1080&h=720&dpr=1"
                            alt="Career counseling session in progress"
                            className="w-full object-cover h-56 sm:h-72 md:h-96 lg:h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white p-4">
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center w-full sm:w-[500px] lg:w-[600px]">
                                Navigate Your Career with Confidence
                            </h1>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1080&h=720&dpr=1"
                            alt="Group brainstorming for career growth"
                            className="w-full object-cover h-56 sm:h-72 md:h-96 lg:h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white p-4">
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center w-full sm:w-[500px] lg:w-[600px]">
                                Unlock Your Path to Success
                            </h1>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                            alt="One-on-one professional career advice"
                            className="w-full object-cover h-56 sm:h-72 md:h-96 lg:h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white p-4">
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center w-full sm:w-[500px] lg:w-[600px]">
                                Transform Your Career with Expert Guidance
                            </h1>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1080&h=720&dpr=1"
                            alt="Team collaborating on future career goals"
                            className="w-full object-cover h-56 sm:h-72 md:h-96 lg:h-96"
                        />
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white p-4">
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center w-full sm:w-[500px] lg:w-[600px]">
                                Step into Your Future, Today
                            </h1>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </header>
            <ServicesList />
        </div>
    );
};

export default Home;
