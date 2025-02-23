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
          Completed a full-stack development course and started working on
          freelance projects.
        </p>
        <img
          src="/images/fullstack-course.png"
          alt="Full-Stack Course"
          className="mt-2 rounded-lg"
        />
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
