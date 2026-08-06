import React from "react";
import { Projects } from "../helpers/helpers";
import { IProject } from "../types/types";
import Project from "./Project";

const ProjectsUI: React.FC<object> = () => {
  return (
    <>
      <div className="w-full text-center">
        <h2>Projects</h2>
        <p>Here's a portfolio of the kinds of apps I can build for you</p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:w-2/3 items-center min-h-[60vh] py-4 gap-y-4 lg:gap-x-4">
          {Projects.map((project: IProject, index: number) => {
            return (
              <React.Fragment key={index}>
                <Project project={project} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectsUI;
