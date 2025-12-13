import React from "react";
import { SparklesText } from "./magicui/sparkles-text";
import { ExTimeline } from "./ui/ExTimeLine";
import Image from "next/image";
import Link from "next/link";
const timelineData = [
  {
    title: "2025",
    content: (
      <>
        <p>
          Launched my personal portfolio website showcasing my projects and
          skills.
        </p>
        <Image
          src="/portfolio.png"
          alt="Portfolio Launch"
          width={800}
          height={600}
          className="mt-2 rounded-lg"
        />
        
        <p className="pt-10">
          Published my research paper on{" "}
          <Link 
            href="https://www.jriiejournal.com/nft-based-authentication-framework-for-securing-enterprise-microservices-in-big-data-environment/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:underline font-semibold"
          >
            NFT-Based Authentication Framework for Securing Enterprise Microservices
          </Link>
        </p>
        
      </>
    ),
  },
  {
    title: "2024",
    content: (
      <>
        <p>
          Develop first version of my NFT based authentication system as
          research
        </p>
        <Image
          src="/diagrem.png"
          alt="inpro industries web"
          width={600}
          height={400}
          className="mt-2 rounded-lg w-[50%]"
        />
        <p>
          Develop the web application for inpro industries PVT using Next js.
        </p>
        <Image
          src="/inpro.png"
          alt="inpro industries web"
          width={600}
          height={400}
          className="mt-2 rounded-lg w-[50%]"
        />
        <p>
          Start the internship at Airport and Aviation servies private Limited
          Srilanka
        </p>
        <Image src="/aasl.png" alt="AASL" width={600} height={400} className="mt-2 rounded-lg w-[50%]" />
        {/* <img
          src="/images/fullstack-course.png"
          alt="Full-Stack Course"
          className="mt-2 rounded-lg"
        /> */}
        <p>Started the startup Company</p>
        <Image
          src="/terracodedev_cover.jpeg"
          alt="Terracode dev"
          width={600}
          height={400}
          className="mt-2 rounded-lg w-[50%]"
        />
      </>
    ),
  },
  // Add more entries as needed
];

export default function Experience() {
  return (
    <div id="experience">
      <div className="flex justify-center pt-20">
        <SparklesText text="Work Experience" />
      </div>
      <div className="flex justify-center">
        <ExTimeline data={timelineData} />
      </div>
    </div>
  );
}
