"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Node.js</li>
        <li>React.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>Flutter (Dart)</li>
        <li>React Native</li>
        <li>Competitive Programming</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Bachelor&apos;s Degree in Computer Science</li>
        <li>Master&apos;s Degree in Software Engineering</li>
        <li>High School Diploma</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-1">
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
    <section id="about" className="text-white">
      <div className="grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

        {/* Flip card */}
<div className="hidden md:flex justify-center group">
  <div className="w-[500px] h-[700px] [perspective:1000px]">
    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* Front */}
      <div className="absolute w-full h-full [backface-visibility:hidden]">
        <Image
          src="/images/about.png"
          alt="Profile Image"
          width={550}
          height={1100}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Back */}
      <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-black via-blue-900 to-blue-800 rounded-xl flex flex-col items-center justify-center gap-6">
        <a
          href="https://github.com/CoderRohan003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl hover:text-gray-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rohan-your-id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </div>
</div>





        {/* Description and Tabs */}
        <div className="text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg leading-relaxed text-[#adb7be]">
            Hi, I&apos;m Rohan — a full-stack developer and Android developer with a
            strong passion for creating impactful, user-centric applications
            across both web and mobile platforms. I&apos;m currently in my 6th
            semester of Computer Science at the National Institute of
            Technology, Durgapur, with a CGPA of 8.11.
            <br /><br />
            On the web side, I enjoy building robust back-end systems and
            responsive front-end interfaces, ensuring seamless user experiences
            and scalable architectures.
            <br /><br />
            On the mobile front, I specialize in cross-platform Android
            development using React Native, delivering high-quality apps that
            perform smoothly across devices.
            <br /><br />
            I&apos;m actively exploring opportunities to work on innovative,
            real-world projects where I can apply and expand my skills in both
            full-stack and mobile development — while learning from and
            contributing to a collaborative tech community.
          </p>

          <div className="flex flex-row justify-start mt-8 gap-4 flex-wrap">
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

          <div className="mt-8 text-[#adb7be]">
            {TAB_DATA.find((data) => data.id === tab)?.content}
          </div>
        </div>
      </div>

      {/* Tailwind custom styles */}
<style jsx>{`
  .perspective {
    perspective: 1000px;
  }
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`}</style>

    </section>
  );
};

export default About;
