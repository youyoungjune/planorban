import { IonCard, IonCardContent, IonCardHeader } from "@ionic/react";
import React from "react";
import { IProject } from "../types/types";
import PlanorbanButton from "./ui/PlanorbanButton";

const Project: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <>
      <IonCard
        color="dark"
        className="flex flex-col justify-center w-1/2 border border-neutral-700"
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
        <IonCardContent>{project.description}</IonCardContent>
      </IonCard>
    </>
  );
};

export default Project;
