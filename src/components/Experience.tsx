import React from "react";
import { ProjectCard } from "./ui/ProjectCard";
import { SparklesText } from "./magicui/sparkles-text";

export default function Experience() {
  return (
    <div>
      <div className="flex justify-center py-20">
        <SparklesText text="Work Experience" />
      </div>
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
