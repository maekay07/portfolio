import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link"
import dynamic from "next/dynamic"
import Image from "next/image";

const HeroSection = () => {
    // JS in here

    return (
        // HTML CSS in return
        <main className="py-5 mt-0 mx-10 md:flex md: shirink-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 md:col-span-8 place-self-center justify-self-start">
                    <div className="col-span-1 md:col-span-8 place-self-center justify-self-start">
                        <h1 className="font-extrabold">
                            <span className="text-white text-8xl">
                                Hello, I&lsquo;m {" "}
                                <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                                    Maekay
                                </span>
                            </span>
                        </h1>
                        <h2 className="font-bold">
                            <span className="text-7xl">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(`<span style="color:#FF7FF">Web Developer</span>`)
                                            .pauseFor(1500)
                                            .deleteAll()
                                            .typeString(`<span style="color:#9E7BFF">Student</span>`)
                                            .pauseFor(1500)
                                            .deleteAll()
                                            .start();
                                    }}
                                />
                            </span>
                            <p className="text-sky-100 mt-8 text-base sm:text-lg md:text-xl mb-6">Slide down to know more about me</p>
                            <Link
                                href="#project"
                                className="px-12 mb-4 inline-block py-3 rounded-full mr-4 border-solid border-2 border-indigo-600 hover:bg-violet-600">
                                Projects
                            </Link>
                            <Link
                                href="https://drive.google.com/file/d/1ovI6CthuGUOsjSx-l7SG7t8SU5zr94Hx/view?usp=drive_link"
                                className="px-6 inline-block py-3 rounded-full border border-solid-2 border-pink-500 hover:bg-pink-400"
                                target="_blank">
                                View My Resume
                            </Link>
                        </h2>
                    </div>
                </motion.div>
                <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
                    <div className="w-[350px] h-[350px] relative z-0">
                        <Image src="/Hero-Section.jpg" alt="hero section" width="350" height="350"
                            className="transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3" style={{objectFit:"cover", width:"350px", height:"350px"}}/>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default HeroSection;