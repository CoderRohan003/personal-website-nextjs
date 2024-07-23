"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>Node.js</li>
                <li>React.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Bachelor's Degree in Computer Science</li>
                <li>Master's Degree in Software Engineering</li>
                <li>High School Diploma</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>Certified JavaScript Developer</li>
                <li>Certified Node.js Developer</li>
                <li>React.js Certification</li>
                <li>Full-Stack Developer Certification</li>
            </ul>
        ),
    },
];

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (newTab) => {
        startTransition(() => {
            setTab(newTab);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/hero.png"
                    width={300}
                    height={300}
                    alt={"About Message"}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                        Hi, I'm Rohan. I am a full-stack developer with a passion for
                        creating engaging and user-centric experiences. I've recently
                        graduated from the prestigious University of Texas at Austin with a
                        degree in Computer Science. I'm currently looking for opportunities
                        to work on cutting-edge projects and contribute to the tech
                        community.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            Achievements
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {
                            TAB_DATA.find((data) => data.id === tab).content
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
