"use client";
import React, { useState,} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    imgUrl: "/images/project1.jpg",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae erat ac nunc volutpat pretium.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/",
    previewUrl: "https://"
  },
  {
    id: 2,
    imgUrl: "/images/project2.jpg",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae erat ac nunc volutpat pretium.",
    tag: ["Web", "All"],
    gitUrl: "https://github.com/",
    previewUrl: "https://"
  },
  {
    id: 3,
    imgUrl: "/images/project3.jpg",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae erat ac nunc volutpat pretium.",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/",
    previewUrl: "https://"
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (ntag) => {
    setTag(ntag);
  }; 

  const filteredProducts = projectsData.filter((product) => 
    product.tag.includes(tag)
  );

  return (
    <section id="projects" style={{ scrollMarginTop: '80px' }}>
  <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">

        <ProjectTag onClick={handleTagChange} name="All" 
        isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" 
        isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" 
        isSelected={tag === "Mobile"} />

      </div>

      <div>
        {filteredProducts.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
