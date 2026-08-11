import { IonCard, IonCardContent, IonCardHeader } from "@ionic/react";
import React from "react";
import { IProject } from "../types/types";
import PlanorbanButton from "./ui/PlanorbanButton";

const Project: React.FC<{ project: IProject; isDarkMode: boolean }> = ({
  project,
  isDarkMode,
}) => {
  const defaultLink: string = `https://${project.basics.name}`;
  return (
    <>
      <IonCard
        color={isDarkMode ? "dark" : "light"}
        className={`${isDarkMode ? "border-neutral-700" : "border-neutral-300"} flex flex-col justify-center w-11/12 sm:w-2/3 lg:w-1/2 xl:w-full border`}
      >
        <a href={project.link ? project.link : defaultLink} target="_blank">
          <img alt={project.basics.name} src={project.basics.image} />
        </a>
        <IonCardHeader className="p-4">
          <PlanorbanButton
            variant="blue"
            href={`${project.link ? project.link : defaultLink}`}
          >
            {project.basics.name}
          </PlanorbanButton>
        </IonCardHeader>
        <IonCardContent className="flex flex-col">
          <p>{project.description}</p>
          {project.frontendRepoLink || project.backendRepoLink ? (
            <div className="flex justify-between gap-x-2 mt-4">
              {project.frontendRepoLink ? (
                <div className="flex gap-x-2">
                  <a
                    href={project.frontendRepoLink}
                    className="hidden sm:block"
                    target="_blank"
                  >
                    <img
                      alt="GitHub logo"
                      src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
                      className="h-10"
                    />
                  </a>
                  <PlanorbanButton
                    variant="red"
                    href={project.frontendRepoLink}
                  >
                    Frontend Repo
                  </PlanorbanButton>
                </div>
              ) : null}
              {project.backendRepoLink ? (
                <div className="flex gap-x-2">
                  <PlanorbanButton
                    variant="yellow"
                    href={project.backendRepoLink}
                  >
                    Backend Repo
                  </PlanorbanButton>
                  <a
                    href={project.backendRepoLink}
                    className="hidden sm:block"
                    target="_blank"
                  >
                    <img
                      alt="GitHub logo"
                      src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
                      className="h-10"
                    />
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default Project;
