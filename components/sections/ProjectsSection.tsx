import Project from "../Project";
// import { ProjectData } from "../../types/ProjectData";
import { useState } from "react";

// const allProjects = [
//   {
//     title: "MY WORKOUT APP",
//     image: "img",
//     description:
//       "This is a mobile friendly, custom workout tracker web app built with React. After creating a profile, users are able to create, save, and edit workouts to store in the user’s library of workouts. Users can then select a workout for the day to have on hand while at the gym.",
//     github: "https://github.com/CharlesCarr/workout-v2",
//     demo: "https://workout-tracker-faa13.web.app/",
//     tech: ["React JS", "Material UI", "Firebase"],
//   },
//   {
//     title: "STOCKCHARTZ",
//     image: "img",
//     description:
//       "This project allows users to input stock tickers to display animated, responsive stock price chart data. The user can add up to two stock tickers and compare side by side with a biaxial chart. Users can also easily view percentage change performance in a side component. Stock price data is fetched from an external API for current pricing.",
//     github: "https://github.com/CharlesCarr/react-stock-chart",
//     demo: "https://stockchartz.web.app/",
//     tech: ["React JS", "Chakra UI", "Polygon.io API", "Recharts"],
//   },
//   {
//     title: "PROJECT THREE",
//     image: "img",
//     description:
//       "This project allows users to input stock tickers to display animated, responsive stock price chart data. The user can add up to two stock tickers and compare side by side with a biaxial chart. Users can also easily view percentage change performance in a side component. Stock price data is fetched from an external API for current pricing.",
//     github: "https://github.com/CharlesCarr/react-stock-chart",
//     demo: "https://stockchartz.web.app/",
//     tech: ["React JS", "Chakra UI", "Polygon.io API", "Recharts"],
//   },
//   {
//     title: "PROJECT FOUR",
//     image: "img",
//     description:
//       "This project allows users to input stock tickers to display animated, responsive stock price chart data. The user can add up to two stock tickers and compare side by side with a biaxial chart. Users can also easily view percentage change performance in a side component. Stock price data is fetched from an external API for current pricing.",
//     github: "https://github.com/CharlesCarr/react-stock-chart",
//     demo: "https://stockchartz.web.app/",
//     tech: ["React JS", "Chakra UI", "Polygon.io API", "Recharts"],
//   },
// ];

function Projects() {
  // will be based off of the project index (need to add that to the data)
  const [projectSelected, setProjectSelected] = useState<number>(0);
  console.log(projectSelected);

  return (
    <div className="h-full w-full relative">
      <ul className="absolute flex justify-center items-center -top-10 left-0">
        <li className={`${projectSelected === 0 ? "bg-black" : null} mr-4 border border-black w-3 h-3 rounded-full cursor-pointer`} onClick={() => setProjectSelected(0)}>
        </li>
        <li className={`${projectSelected === 1 ? "bg-black" : null} mr-4 border border-black w-3 h-3 rounded-full cursor-pointer`} onClick={() => setProjectSelected(1)}>
        </li>
        <li className={`${projectSelected === 2 ? "bg-black" : null} mr-4 border border-black w-3 h-3 rounded-full cursor-pointer`} onClick={() => setProjectSelected(2)}>
        </li>
        <li className={`${projectSelected === 3 ? "bg-black" : null} mr-4 border border-black w-3 h-3 rounded-full cursor-pointer`} onClick={() => setProjectSelected(3)}>
        </li>
      </ul>
      {/* Individual Project One */}
      {projectSelected === 0 && <Project />}
      {projectSelected === 1 && (
        <div className="h-full w-full border border-black">Project Two</div>
      )}
      {projectSelected === 2 && (
        <div className="h-full w-full border border-black">Project Three</div>
      )}
    </div>
  );
}

export default Projects;

{
  /* <section className="flex flex-col justify-center items-center px-4 sm:px-32 h-full" id="projects">
 
</section> */
}
{
  /* <p className="text-3xl">MY WORK.</p>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0">
  {projects.map(
    ({ title, image, description, github, demo, tech }: ProjectData) => {
      return (
        <Project
          key={title}
          title={title}
          image={image}
          description={description}
          github={github}
          demo={demo}
          tech={tech}
        />
      );
    }
  )}
</div>

<div className="flex justify-center items-center mb-28">
  <a
    onClick={toggleMoreProjects}
    className="relative border-white border-2 mr-3 rounded px-8 py-4 overflow-hidden group bg-neutral-800 hover:bg-gradient-to-r hover:from-neutral-700 hover:to-neutral-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-neutral-500 transition-all ease-out duration-300 cursor-pointer"
  >
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative font-semibold tracking-wider text-lg">
      {showAllPros ? "See Less" : "See More"}
    </span>
  </a>
</div> */
}
