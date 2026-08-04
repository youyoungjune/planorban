import "./App.css";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonPopover,
  setupIonicReact,
} from "@ionic/react";
import { sunnyOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import { useState } from "react";
import Project from "./components/Project";
import { Projects } from "./helpers/helpers";
import { IProject } from "./types/types";
import SkillsUI from "./components/SkillsUI";
import React from "react";

setupIonicReact();

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  return (
    <>
      <header className="grid grid-cols-12 min-h-[30vh] overflow-y-auto justify-center border-b border-neutral-700 bg-neutral-900 p-8">
        <div className="col-span-1 w-fit h-fit flex justify-start">
          <a href="https://planorban.com">
            <img
              src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLyac3HvNfwGCjY5F1plgsOi7kWRbQetrHaMKB"
              alt="Planorban logo"
              className={`${isDarkMode ? "invert" : ""} size-10`}
            />
          </a>
        </div>
        <div className="col-span-10 flex flex-col justify-center items-center w-full">
          <IonButton id="links-trigger" fill="clear" className="w-fit">
            <img
              src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLUnvc5KtjuCHJXMhVGktnDBzvxQi2bIE5ofer"
              alt="Headshot"
              className="rounded-full size-28"
            />
          </IonButton>
          <IonPopover trigger="links-trigger" triggerAction="hover">
            <IonContent>Test</IonContent>
          </IonPopover>
          <p>
            Hello! My name is{" "}
            <span className="hover:underline">
              <a href="https://github.com/youyoungjune">James Yu.</a>
            </span>
          </p>
          <p>I am an AI Software Engineer skilled in:</p>
          <SkillsUI />
        </div>
        <div className="col-span-1 flex justify-end items-start h-fit">
          <IonButton
            fill="clear"
            color="warning"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <IonIcon slot="icon-only" icon={sunnyOutline}></IonIcon>
          </IonButton>
        </div>
      </header>
      <main className="overflow-y-auto h-[70vh]">
        <div className="flex flex-col items-center min-h-[60vh] py-4 gap-y-4">
          <div className="w-full text-center">
            <h2>Projects</h2>
            <p>Here's a portfolio of the kinds of apps I can build for you</p>
          </div>
          {Projects.map((project: IProject, index: number) => {
            return (
              <React.Fragment key={index}>
                <Project project={project} />
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex justify-center pt-4 min-h-[10vh] max-h-[10vh] border-t border-neutral-700 bg-neutral-900">
          Test
        </div>
      </main>
    </>
  );
}

export default App;
