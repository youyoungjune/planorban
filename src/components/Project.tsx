import { IonCard, IonCardContent, IonCardHeader } from "@ionic/react";
import React from "react";
import { IProject } from "../types/types";
import PlanorbanButton from "./ui/PlanorbanButton";

const Project: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <>
      <IonCard
        color="dark"
        className="flex flex-col justify-center w-1/2 lg:w-full border border-neutral-700"
      >
        <img alt={project.basics.name} src={project.basics.image} />
        <IonCardHeader className="p-4">
          <PlanorbanButton
            variant="blue"
            href={`${project.link ? project.link : `https://${project.basics.name}`}`}
          >
            {project.basics.name}
          </PlanorbanButton>
        </IonCardHeader>
        <IonCardContent className="flex flex-col">
          <p>{project.description}</p>
          <div className="flex justify-between gap-x-2 mt-4">
            <div className="flex gap-x-2">
              <img
                alt="GitHub logo"
                src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
                className="h-10"
              />
              <PlanorbanButton variant="red">Frontend Repo</PlanorbanButton>
            </div>
            <div className="flex gap-x-2">
              <PlanorbanButton variant="yellow">Backend Repo</PlanorbanButton>
              <img
                alt="GitHub logo"
                src="https://m2my1rq4tt.ufs.sh/f/f9154ab4-83d6-4f30-8828-36ef21c11531-klmal9.png"
                className="h-10"
              />
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default Project;
