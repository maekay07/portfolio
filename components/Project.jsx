import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
    const projectData = [
        {
            id: 1,
            title: "LinkedOut & About",
            description: "This is a project.",
            image: "/projects/linkedout&about.png",
            gitUrl: "https://github.com/APU-Blockchain-Cryptocurrency-Club/LinkedOutAndAbout"

        },
        {
            id: 2,
            title: "ClubDAO",
            description: "This is a project.",
            image: "/projects/clubdao.png",
            gitUrl: "https://github.com/0xYudhishthra/ClubDAO"
        },
        {
            id: 3,
            title: "FundChat",
            description: "This is a project for APUBCC Sparkathon & Solana Hyperdrive.",
            image: "/projects/FundChat.png",
            gitUrl: "https://github.com/cheongyeechian/portfolio"
        },
        {
            id: 4,
            title: "Megamask",
            description: "This is a project for ETH Online.",
            image: "/projects/Megamask.png",
            gitUrl: "https://github.com/megamask"
        }, {
            id: 5,
            title: "zkJom",
            description: "This is a project fro ETHKL.",
            image: "/projects/zkJom.png",
            gitUrl: "https://github.com/trlau/zkJ0M"
        }, {
            id: 6,
            title: "Attest Me",
            description: "This is a project for ETH Global Superhack.",
            image: "/projects/attestme.png",
            gitUrl: "https://github.com/0xBenjamintan/attestMe"
        },

    ];

    return (
        <div className="mx-8 py-28" id="project">
            <div className="text-4xl font-semibold mb-8">My Project</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        gitUrl={project.gitUrl}
                    />
                )}
            </div>
        </div>
    );
}

export default Project;