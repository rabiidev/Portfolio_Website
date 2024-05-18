"use client"
import React, { useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>
    ) 
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Development and Mobile Application/Mern Stack Development</li>
        <li>SMIT(Saylani Mass IT Training Program)</li>
      </ul>
    )
  },
{
  title: "Certifications",
  id: "certifications",
  content: (
    <ul className="list-disc pl-2">
      <li>Web Development Internship Program <br/> From Mehran University of Engineering & Technology</li>
      <li>Web Development Internship Program <br/> From CodeAlpha </li>
    </ul>
  )
}
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }
  return (
<section className="text-white">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-img.jpg"
          alt="about image"
          className=""   
        width={800} height={800}/>
    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
    <p className="text-base lg:text-lg">
    Hi there! 👋 I'm Rabia Shaikh, a MERN Stack Developer passionate about building robust, 
    scalable web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, 
    I thrive on turning ideas into innovative solutions. Let's create something awesome 
    together!
    </p>
    <div className="flex flex-row justify-start mt-8">
      <TabButton 
      selectTab={() => handleTabChange("skills")} 
      active={tab === "skills"}
      >
        {""}
         Skills{""} 
      </TabButton>
      <TabButton 
      selectTab={() => handleTabChange("education")} 
      active={tab === "education"}
      >
        {""}
         Education{""} 
      </TabButton>
      <TabButton 
      selectTab={() => handleTabChange("certifications")} 
      active={tab === "certifications"}
      >
        {""}
         Certifications{""} 
      </TabButton>
      {/* <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">Skills</span>
      <span className="">Education</span>
      <span className="">Experience</span> */}
    </div> 
    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div>
    </div>
</section>
  );
};

export default AboutSection;