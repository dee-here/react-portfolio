import Project from "../components/Project";

export default function ProjectPage() {
  return (
    <div className="page-container">
      <p>Projects</p>
      <div className="project-container">
      <Project
          title={"ReadIt"}
          backgroundClass={"readit"}
          deployedLink={"https://project-readit-ae03b3828bf5.herokuapp.com/"}
          github={"https://github.com/flimits/readit"}
          subTitle={"MERN"}
        />
        <Project
          title={"Space Jam x"}
          backgroundClass={"space-jam-x"}
          deployedLink={"https://dee-here.github.io/space-jam-x/"}
          github={"https://github.com/dee-here/space-jam-x"}
          subTitle={"Web API"}
        />
        <Project
          title={"Majority Matters"}
          backgroundClass={"majority-matters"}
          deployedLink={"https://majority-matters-080972dae02f.herokuapp.com/"}
          github={"https://github.com/jamessahunter/majority-matters"}
          subTitle={"MVC"}
        />
        <Project
          title={"Weather Dashboard"}
          backgroundClass={"weather-dashboard"}
          deployedLink={"https://dee-here.github.io/weather-dashboard/"}
          github={"https://github.com/dee-here/weather-dashboard"}
          subTitle={"Web API"}
        />
        <Project
          title={"Just Another Text Editor"}
          backgroundClass={"jate"}
          deployedLink={"https://ds-text-editor-pwa-4262863a72d2.herokuapp.com/"}
          github={"https://github.com/dee-here/text-editor-pwa"}
          subTitle={"PWA"}
        />
        <Project
          title={"Work Day Scheduler"}
          backgroundClass={"workday-planner"}
          deployedLink={"https://dee-here.github.io/work-day-scheduler/"}
          github={"https://github.com/dee-here/work-day-scheduler"}
          subTitle={"JS"}
        />
        <Project
          title={"Note Taker"}
          backgroundClass={"note-taker"}
          deployedLink={"https://protected-plains-20171-d8e80bc65b06.herokuapp.com/"}
          github={"https://github.com/dee-here/note-taker"}
          subTitle={"Web API"}
        />
      </div>
    </div>
  );
}
