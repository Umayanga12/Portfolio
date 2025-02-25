import React from "react";
import { TitleProject } from "./ui/projectTitle";
import { ProjectCard } from "./ui/ProjectCard";
import { GitHubButton } from "./ui/GithubButton";

export default function RecentProject() {
  return (
    <div>
      <TitleProject />
      <ProjectCard />
      <ProjectCard />
      <p className="text-white-200 md:mt-10 my-5 text-center">
        Reach my GitHub to explore all the project I have done.
      </p>
      <GitHubButton />
    </div>
  );
}
