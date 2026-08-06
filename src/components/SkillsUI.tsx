import { IonButton, IonCard, IonContent, IonPopover } from "@ionic/react";
import { ESkillCategories, ISkill } from "../types/types";
import React from "react";
import { Skills } from "../helpers/helpers";

const SkillsUI: React.FC<{}> = () => {
  return (
    <>
      <IonCard color="dark">
        {Object.values(ESkillCategories).map(
          (sc: ESkillCategories, index: number) => {
            return (
              <React.Fragment key={index}>
                <IonButton color="dark" id={`${sc}-trigger`}>
                  {sc}
                </IonButton>
                <IonPopover trigger={`${sc}-trigger`} triggerAction="hover">
                  <IonContent color="dark">
                    <div className="grid grid-cols-3 p-4 place-items-center gap-y-4">
                      {Skills.sort((a: ISkill, b: ISkill) =>
                        a.basics.name.localeCompare(b.basics.name),
                      ).map((skill: ISkill, index: number) => {
                        if (skill.category === sc) {
                          return (
                            <React.Fragment key={index}>
                              <img
                                title={skill.basics.name}
                                alt={skill.basics.name}
                                src={skill.basics.image}
                                className={`${skill.needsInvert ? "invert" : ""} h-10 w-fit`}
                              />
                            </React.Fragment>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </div>
                  </IonContent>
                </IonPopover>
              </React.Fragment>
            );
          },
        )}
      </IonCard>
    </>
  );
};

export default SkillsUI;
