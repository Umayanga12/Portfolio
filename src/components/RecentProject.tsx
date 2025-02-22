import React from "react";
import { TitleProject } from "./ui/projectTitle";
import { ProjectCard } from "./ui/ProjectCard";

export default function RecentProject() {
  return (
    <div>
      <TitleProject />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
