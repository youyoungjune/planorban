import React from "react";
import { Projects } from "../helpers/helpers";
import { IProject } from "../types/types";
import Project from "./Project";

const ProjectsUI: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  return (
    <>
      <div className="w-full text-center">
        <h2>Projects</h2>
        <p>Here's a portfolio of the kinds of apps I can build for you</p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col xl:grid xl:grid-cols-2 xl:w-9/12 items-center py-4 gap-y-4 xl:gap-x-4">
          {Projects.map((project: IProject, index: number) => {
            return (
              <React.Fragment key={index}>
                <Project project={project} isDarkMode={isDarkMode} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectsUI;
