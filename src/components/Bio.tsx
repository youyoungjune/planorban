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
        <div className="flex flex-col xl:flex-row justify-center gap-y-4 xl:gap-y-0 gap-x-4">
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
              education for the next 7+ years.
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
              enough time to make the impact I sought. For awhile, I
              begrudgingly accepted this reality. I could only do so much and
              what I was doing was my best; I bought as much time as I could
              after school by applying my data analytics skills to automate my
              classroom procedures, keeping at my career development mentoring
              research, and I also had retained some of my consulting clients
              from college, believing that continuing to support their efforts
              in serving the community would have ancillary benefits for kids.
              Over time, however, as my familial responsibilities grew with age
              and the time after work I could dedicate to education analytics
              dwindled, the lifestyle came to be unsustainable and I found
              myself in a position of having to choose between technology, which
              held my only hope for students, or my teaching career.
              Reluctantly, I chose to return to tech; although I would be
              leaving my students, I knew the gap would only put me in a better
              position to serve them.
            </p>
            <br />
            <p>
              {/* need to mention i started to pick up software dev around this time */}
              My first stint when I rejoined tech was at a remote consultancy
              called Quality Information Partners &#040;QIP&#041;, where I was
              contracted by the U.S. Department of Education as a data analyst.
              It was a great job that married my interests in technology and ed
              policy enough to where I could justify my decision to leave the
              classroom. As is the nature of contract work, my team and I were
              affected by the effort to dismantle the Department of Education
              and our contract was cancelled.
            </p>
            <br />
            <p>
              I turned to the only
              {/*  */}
              if you want to do it well. The school day is booked solid with
              classes and meetings
              {/*  */}
              The school day is pretty much booked solid with classes and
              meetings and even that is still not enough time to progress
              students let alone kids born into poverty and violence. Now, the
              school day is already pretty much booked solid with classes and
              meetings so if I wanted to apply my data analytics skills, it'd
              have to be after hours whenever I did not have appointments with
              parents or afterschool programs.
            </p>
            <p>
              {/* Want to demonstrate automation was needed... because not enough time because wanting to go above and beyond as teacher while having family */}
              Now, teaching is not a 9-to-5 kind of job if you want to do it
              well. Meeting with parents after they and I both get off work,
              homework help, afterschool programs, etc; all of it is needed.
              Plus, this gets compounded by In addition, I would still sharpen
              my technical skills after the school day by retaining some of my
              consulting clients from college, believing that continuing to
              support their efforts in serving the community would have
              ancillary benefits for kids. A lot to do and not enough time to do
              it all; the catalyst for automation. This, compounded by growing
              frustration because students are not progressing at the pace that
              they need to or the ever-increasing sense of urgency that arises
              when working in an area with high concentrations of poverty and
              violence—all the while wondering if we all could just do a little
              bit more, maybe we could make more of a dent in these
              issues—something had to give. I also started to build a family of
              my own; the best part of my life but does not necessarily lend
              itself to increasing investment in my work.
              {/* started developing solutions to automate but put in position where i couldnt, still sharpening tech skills via retained clients, increasing demands of family needs automation */}
            </p>
            <br />
            <p>
              My technology experience predates my education experience as I was
              trained in data analytics in college, focusing on education
              policy. While studying education data, I felt the urge to get
              classroom teaching experience to better understand the data I was
              analyzing, always intending to return to tech. As a teacher, I
              would fulfill my typical teaching duties during the day while
              completing client and personal analytics projects in the evenings
              using Python, SQL, and Excel, incorporating technology in my
              classroom wherever I could to innovate teaching. Accumulating more
              responsibilities as I got older and losing some of that evening
              time but unwilling to lose technical skills, I sought automation
              to make up for the lost time. However, I had much to learn before
              I could use automation effectively in the classroom and ultimately
              the decrease in time put me in a position of feeling I had to
              decide between teaching and technology. Believing that developing
              my technical skills would be more beneficial to education, I
              became an Education Data Analyst at Quality Information Partners
              where I experienced some of the best professional development of
              my life, writing SQL and VBA programs to automate report-building
              for the U.S. Department of Education as a contractor. Working
              remotely also gave me a little more evening time where my
              insistence for automation helped me discover software development,
              building apps in Typescript &#040;Next.js&#041; with Java
              &#040;Spring Boot&#041;, Python &#040;Django&#041;, and Golang
              &#040;mux&#041; on the backend. I see software development as the
              ultimate automation of data reporting, “scheduling” data fetches
              and setting up displays for these data ahead of time instead of
              manually and time-consumingly building dashboards for the same
              data display, and I have become addicted. When I retire, I will
              likely spend my day-to-day building apps. I realized I want to
              build tools like yours for teachers and students over analytic
              dashboards.
            </p>
            <br />
            <p>
              Trying to bridge technology and education motivates me to become a
              Software Engineer. I am happy to expand on my story, experience,
              and skills and can be reached at{" "}
              <a
                href="mailto:jamesdavidyu@gmail.com"
                target="_blank"
                className="hover:underline hover:cursor-pointer text-blue-600"
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
