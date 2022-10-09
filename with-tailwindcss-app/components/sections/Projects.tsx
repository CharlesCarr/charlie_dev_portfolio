import Project from "../Project";
import { ProjectData } from "../../types/ProjectData";
import { useState } from "react";

const allProjects = [
  {
    title: "MY WORKOUT APP",
    image: "img",
    description:
      "This is a mobile friendly, custom workout tracker web app built with React. After creating a profile, users are able to create, save, and edit workouts to store in the user’s library of workouts. Users can then select a workout for the day to have on hand while at the gym.",
    github: "https://github.com/CharlesCarr/workout-v2",
    demo: "https://workout-tracker-faa13.web.app/",
    tech: ["React JS", "Material UI", "Firebase"],
  },
  {
    title: "STOCKCHARTZ",
    image: "img",
    description:
      "This project allows users to input stock tickers to display animated, responsive stock price chart data. The user can add up to two stock tickers and compare side by side with a biaxial chart. Users can also easily view percentage change performance in a side component. Stock price data is fetched from an external API for current pricing.",
    github: "https://github.com/CharlesCarr/react-stock-chart",
    demo: "https://stockchartz.web.app/",
    tech: ["React JS", "Chakra UI", "Polygon.io API", "Recharts"],
  },
  {
    title: "PROJECT THREE",
    image: "img",
    description:
      "This project allows users to input stock tickers to display animated, responsive stock price chart data. The user can add up to two stock tickers and compare side by side with a biaxial chart. Users can also easily view percentage change performance in a side component. Stock price data is fetched from an external API for current pricing.",
    github: "https://github.com/CharlesCarr/react-stock-chart",
    demo: "https://stockchartz.web.app/",
    tech: ["React JS", "Chakra UI", "Polygon.io API", "Recharts"],
  },
  {
    title: "PROJECT FOUR",
    image: "img",
    description:
      "This project allows users to input stock tickers to display animated, responsive stock price chart data. The user can add up to two stock tickers and compare side by side with a biaxial chart. Users can also easily view percentage change performance in a side component. Stock price data is fetched from an external API for current pricing.",
    github: "https://github.com/CharlesCarr/react-stock-chart",
    demo: "https://stockchartz.web.app/",
    tech: ["React JS", "Chakra UI", "Polygon.io API", "Recharts"],
  },
];

function Projects() {
  const [showAllPros, setShowAllPros] = useState(false);
  const [projects, setProjects] = useState<ProjectData[]>(allProjects.slice(0,3));

  const toggleMoreProjects = () => {
    setShowAllPros(!showAllPros);

    if (projects.length > 3) {
      setProjects(allProjects.slice(0,3));
    } else {
      setProjects(allProjects);
    }
  };

  return (
    <section className="flex flex-col justify-start item-start mt-32 px-20">
      <p>MY WORK.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      <div className="flex justify-center items-center my-20">
        <button className="w-32 border p-4" onClick={toggleMoreProjects}>
          {showAllPros ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
}

export default Projects;
