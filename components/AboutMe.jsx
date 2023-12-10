import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./tabButton";
import Image from "next/image";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>PHP</li>
                <li>Sitefinity CMS</li>
                <li>DNN CMS</li>
            </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
            <ul className="list-disc pl-5">
                <li>KL Mini Hack</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-5">
                <li>Asia Pacific University</li>
                <li>Hua Xia Private School</li>
                <li>SMK Seri Serdang</li>
            </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return (
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-28 xl-gap-16 items-center">
                <div>
                    <Image src="/AboutMe.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }} />
                </div>
                <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">I am currently having my diploma internships, and will continue studying Degree in Software Engineering Year 2 in the end of February 2024. </p>
                    <div className="flex flex-row mt-8">
                        {/* 1e */}
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >

                            Skills
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("experiences")}
                            active={tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>

                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;