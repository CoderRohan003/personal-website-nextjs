"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    imgUrl: "/images/ecom-app.png",
    title: "E-Commerce App using MERN",
    description:
      "A modern, full-featured e-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js). It supports user authentication, product browsing, cart management, order processing, and admin controls. Designed with a responsive UI and a secure, scalable backend, the app delivers a smooth shopping experience across devices.",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CoderRohan003/E-Commerce_App.git",
    previewUrl: "https://"
  },
  {
    id: 2,
    imgUrl: "/images/movie_app.png",
    title: "Movie App using React Native",
    description:
      "A movie discovery app built with React and the TMDB API. Users can search for movies, view details, and create a watchlist. This is a cross-platform mobile application built with React Native and Expo, featuring secure authentication using Appwrite. Users can register and log in with their email and password. The app supports dark mode, multiple languages, and personalized profile management. It includes intuitive navigation powered by Expo Router. Designed for modern usability, it ensures a smooth and responsive user experience.",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/CoderRohan003/movie-flix.git",
    previewUrl: "https://"
  },
  {
    id: 3,
    imgUrl: "/images/social_media.png",
    title: "Social Media App using React and SQL",
    description:
      "This social media post application is built using React for the front-end, with a robust back-end powered by Node.js, Express, and SQL managed through Sequelize ORM. It enables users to create, edit, and delete posts effortlessly while supporting real-time interactions such as likes and comments. User authentication ensures secure access and personalized experiences. The app features a clean, responsive design that works seamlessly across devices.",
    tag: ["All", "Web"],
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
    <section id="projects" style={{ scrollMarginTop: "80px" }}>
      <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h1>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>

      <div className="grid min-h-52 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
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
