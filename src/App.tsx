import "./App.css";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonPopover,
  setupIonicReact,
} from "@ionic/react";
import { moonOutline, sunnyOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import { useState } from "react";
import SkillsUI from "./components/SkillsUI";
import Bio from "./components/Bio";
import ProjectsUI from "./components/ProjectsUI";
import Links from "./components/Links";
import useDarkMode from "./hooks/useDarkMode";

setupIonicReact();

function App() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [bio, setBio] = useState<boolean>(false);
  return (
    <>
      <header
        className={`${isDarkMode ? "bg-neutral-900 border-neutral-700" : "border-neutral-300"} flex flex-col min-h-[30vh] max-h-[30vh] overflow-y-auto justify-center border-b p-8`}
      >
        <div className="flex justify-between items-start">
          <a href="https://planorban.com">
            <img
              src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLyac3HvNfwGCjY5F1plgsOi7kWRbQetrHaMKB"
              alt="Planorban logo"
              className={`${isDarkMode ? "invert" : ""} size-10`}
            />
          </a>
          <IonButton id="links-trigger" fill="clear" className="w-fit">
            <img
              src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLUnvc5KtjuCHJXMhVGktnDBzvxQi2bIE5ofer"
              alt="Headshot"
              className="rounded-full size-28"
            />
          </IonButton>
          <IonPopover trigger="links-trigger" triggerAction="hover">
            <IonContent color="dark">
              <div className="p-4">
                <Links setBio={setBio} />
              </div>
            </IonContent>
          </IonPopover>
          <IonButton
            fill="clear"
            color={isDarkMode ? "warning" : ""}
            className={isDarkMode ? "" : "text-black"}
            onClick={() => setIsDarkMode()}
          >
            <IonIcon
              slot="icon-only"
              icon={isDarkMode ? sunnyOutline : moonOutline}
            ></IonIcon>
          </IonButton>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p>
            Hello! My name is{" "}
            <span className="hover:underline">
              <a href="https://github.com/youyoungjune">James Yu.</a>
            </span>
          </p>
          <p>I am an AI Software Engineer skilled in:</p>
          <SkillsUI isDarkMode={isDarkMode} />
        </div>
      </header>
      <main className="overflow-y-auto h-[70vh]">
        {bio ? <Bio /> : <ProjectsUI isDarkMode={isDarkMode} />}
        <div
          className={`${isDarkMode ? "bg-neutral-900 border-neutral-700" : "border-neutral-300"} flex justify-center items-center min-h-[10vh] max-h-[10vh] border-t`}
        >
          Test
        </div>
      </main>
    </>
  );
}

export default App;
