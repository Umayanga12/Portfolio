import React from "react";
import { SparklesText } from "./magicui/sparkles-text";
import { ExTimeline } from "./ui/ExTimeLine";

const timelineData = [
  {
    title: "2025",
    content: (
      <>
        <p>
          Launched my personal portfolio website showcasing my projects and
          skills.
        </p>
        <img
          src="/images/portfolio-launch.png"
          alt="Portfolio Launch"
          className="mt-2 rounded-lg"
        />
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
        <p>
          Develop the web application for inpro industries PVT using Next js.
        </p>
        <p>
          Start the internship at Airport and Aviation servies private Limited
          Srilanka
        </p>
        {/* <img
          src="/images/fullstack-course.png"
          alt="Full-Stack Course"
          className="mt-2 rounded-lg"
        /> */}
        <p>Started the startup Company</p>
      </>
    ),
  },
  // Add more entries as needed
];

export default function Experience() {
  return (
    <div>
      <div className="flex justify-center pt-20">
        <SparklesText text="Work Experience" />
      </div>
      <div className="flex justify-center">
        <ExTimeline data={timelineData} />
      </div>
    </div>
  );
}
