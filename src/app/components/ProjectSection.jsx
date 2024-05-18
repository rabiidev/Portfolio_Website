"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
   {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/images/projects/pic-1.PNG",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
   },
   {
      id: 2,
      title: "Pinterest-Clone Website using Node.js",
      description: "Project 2 description",
      image: "/images/projects/pic-2.PNG",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
   },
   {
      id: 3,
      title: "Rest-API using React",
      description: "Project 3 description",
      image: "/images/projects/pic-3.PNG",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
   },
   {
      id: 4,
      title: "E-commerce Website",
      description: "Project 4 description",
      image: "/images/projects/pic-4.PNG",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
   },
   {
      id: 5,
      title: "Counter App",
      description: "Project 4 description",
      image: "/images/projects/pic-5.PNG",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/"
   },
   {
      id: 6,
      title: "Expense Tracker",
      description: "Project 4 description",
      image: "/images/projects/pic-6.PNG",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/"
   }
]

const ProjectSection = () => {
   const [tag, setTag] = useState("All"); 

   const handleTagChange = (newTag) => {
      setTag(newTag);
   };

   const filteredProjects = projectsData.filter((project) => 
      project.tag.includes(tag)
   );
  return (
   <>
     <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
      My Projects
     </h2>
     <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
      onClick={handleTagChange} 
      name="All"
      isSelected={tag === "All"}
      />
      <ProjectTag
      onClick={handleTagChange} 
      name="Web"
      isSelected={tag === "Web"}
      />
      <ProjectTag
      onClick={handleTagChange} 
      name="Mobile"
      isSelected={tag === "Mobile"}
      />
      {/* <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">All</button>
      <button className="rounded-full border-2 border-slate-600  hover:border-white px-6 py-3 text-xl cursor-pointer">Web</button> */}
     </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
         {filteredProjects.map((project) => ( 
         <ProjectCard 
         key={project.id} 
         title={project.title} 
         description={project.description} 
         imgUrl={project.image}
         // tags={project}
         gitUrl={project.gitUrl}
         previewUrl={project.previewUrl}
        />
      ))}
    </div>
   </>
 );
};

export default ProjectSection;