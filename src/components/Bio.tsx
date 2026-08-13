import { IonButton, IonIcon } from "@ionic/react";
import { homeOutline } from "ionicons/icons";

const Bio: React.FC<{
  setBio: (bio: boolean) => void;
  isDarkMode: boolean;
}> = ({ setBio, isDarkMode }) => {
  return (
    <>
      <div className="flex flex-col items-center p-4">
        <IonButton
          fill="clear"
          color={isDarkMode ? "light" : "dark"}
          className="w-fit mb-4"
          shape="round"
          onClick={() => {
            setBio(false);
          }}
        >
          <IonIcon slot="icon-only" icon={homeOutline}></IonIcon>
        </IonButton>
        <div className="flex flex-col xl:flex-row justify-center gap-y-8 xl:gap-y-0 gap-x-4">
          <iframe
            src="https://m2my1rq4tt.ufs.sh/f/AR95GDbqfmiLPJQZmCa2zC9gLsnEG3bAMYQ1UOwViherBmc5"
            className="h-175 xl:h-231.25 xl:w-175"
          ></iframe>
          <div className="xl:w-175 px-8 2xl:p-0">
            <p>Dear Recruiter,</p>
            <br />
            <p>
              Even after 3 years in tech away from the classroom, I am still a
              teacher at heart. I re-entered tech after 7+ years teaching in
              inner-city Syracuse schools because I became convinced that
              automation is the only path to meaningful progress in education.
              Now that I have AI software engineering skills, I am ready to
              return to my core mission of improving educational outcomes.
            </p>
            <br />
            <p>
              My edtech experience predates my teaching experience. I was
              trained in education policy data analytics through college
              internships consulting educational institutions, nonprofits, and a
              career development mentoring program I started. While analyzing
              data to inform education policy decisions in these roles, I
              questioned whether I could make effective recommendations that
              would ultimately affect public school teachers without the frame
              of reference of having been one myself. Internalizing this notion,
              I got my master's in teaching and was hired by the Syracuse City
              School District where I tested my data-driven theories about what
              kids need to succeed weighed against the demands of public
              education for the next 7 years.
            </p>
            <br />
            <p>
              But there is simply not enough time in the day to educate kids to
              the level they deserve. Even being packed with classes and
              meetings, the school day on its own is just not enough to
              adequately progress students—regardless of background let alone
              those born in poverty and violence. This leaves all the other
              activities that are just as important to student success like
              meeting parents, tutoring, extracurriculars, etc. to the
              afterschool hours and even then, it never felt like there was
              enough time to make the impact I sought. We need automated
              solutions that can recoup teachers' lost time in order to properly
              equip students. For awhile, I begrudgingly accepted this reality.
              I could only do so much and what I was doing was my best; I bought
              as much time as I could after school by applying my data analytics
              skills to automate my classroom procedures, I kept at my career
              development mentoring research, and I also had retained some of my
              consulting clients from college, believing that continuing to
              support their efforts in serving the community would have
              ancillary benefits for kids. Over time, however, as my familial
              responsibilities grew with age and the time after work I could
              dedicate to education analytics dwindled, the lifestyle came to be
              unsustainable and I found myself in a position of having to choose
              between technology, which held my only hope for students, or my
              teaching career; I only had time for one or the other. Guiltily, I
              chose to return to tech thinking although I would be leaving my
              students, I knew the gap would only put me in a better position to
              serve them.
            </p>
            <br />
            <p>
              My first stint when I rejoined tech was at a remote consultancy
              called Quality Information Partners where I was contracted by the
              U.S. Department of Education as a data analyst. This job married
              my interests in technology and ed policy enough to quell my guilt
              as I could continue contributing to public education through my
              efforts informing policy decisions that trickled down to students
              while also growing in my coding skills. Around this time, I picked
              up app development, imagining tools that could have further
              automated my teaching workflows or career development mentoring
              and building them in Golang and Typescript React.
            </p>
            <br />
            <p>
              As is the provisional nature of contract work, a year-and-a-half
              into this position, my team and I were affected by the effort to
              dismantle the Department of Education and our contract was
              cancelled. By this time though, I had cultivated a joy for
              building apps so I took this chance to apply for software
              engineering roles. I currently work as a junior software engineer
              at Electronic Data Collection Corporation and while I am now in a
              different industry, I am still able to serve the education field
              as most of our clients are higher education institutions.
              Furthermore, I am able to have access to tools like Claude Code,
              AWS, and specialized point-of-sale Android devices, all of which I
              have taken advantage of to continue growing in my technical
              skills. That being said, while I feel lucky in my current
              position, I can never forget my students and will always look for
              ways I can more targetedly serve them again now with my newfound
              skills.
            </p>
            <br />
            <p>
              I am a seasoned software engineer who can efficiently develop
              applications together with AI, ready to apply this experience more
              directly to education. I am happy to expand on my story,
              experience, and skills and can be reached at{" "}
              <a
                href="mailto:jamesdavidyu@gmail.com"
                target="_blank"
                className="hover:underline hover:cursor-pointer"
              >
                jamesdavidyu@gmail.com
              </a>{" "}
              or &#040;315&#041; 760-4443 for an in-person or virtual interview.
              Thank you in advance for the time and consideration.
            </p>
            <br />
            <p>Sincerely,</p>
            <p>James Yu</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;
