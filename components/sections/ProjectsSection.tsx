import Project from "../Project";
import NFTCollectionImg from "../../images/projects/nft-collection-screen-one.png";
import StockChartImg from "../../images/projects/StockChartz.png";
import WorkoutImg from "../../images/projects/WorkoutApp.png";
import { useState } from "react";

const allProjects = [
  {
    title: "NFT WEBSITE",
    image: NFTCollectionImg,
    description:
      "This is a professional enterprise landing page to display NFT collections with a clean and modern design. NFT images were created using StarryAI's AI generation. Users are able to view and filter by different collections.",
    github: "https://github.com/CharlesCarr/next-nft-landing-page",
    demo: "https://next-nft-landing-page.vercel.app/",
    tech: ["React JS", "TypeScript", "Next.js", "TailwindCSS"],
  },
  {
    title: "MY WORKOUT APP",
    image: WorkoutImg,
    description:
      "This is a mobile friendly, custom workout tracker web app built with React. After creating a profile, users are able to create, save, and edit workouts to store in the user’s library of workouts. Users can then select a workout for the day to have on hand while at the gym.",
    github: "https://github.com/CharlesCarr/workout-v2",
    demo: "https://workout-tracker-faa13.web.app/",
    tech: ["React JS", "Material UI", "Firebase"],
  },
  {
    title: "STOCKCHARTZ",
    image: StockChartImg,
    description:
      "This project allows users to input stock tickers to display animated, responsive stock price chart data. The user can add up to two stock tickers and compare side by side with a biaxial chart. Users are also able to view percentage change performance. Stock price data is fetched from an external API for current pricing.",
    github: "https://github.com/CharlesCarr/react-stock-chart",
    demo: "https://stockchartz.web.app/",
    tech: ["React JS", "Chakra UI", "Polygon.io API", "Recharts"],
  },
  {
    title: "NFL STATS DASHBOARD",
    image: StockChartImg,
    description:
      "NFL DASHBOARD DESCRIPTION.",
    github: "https://github.com/CharlesCarr/react-stock-chart",
    demo: "https://stockchartz.web.app/",
    tech: ["React JS", "Chakra UI", "Polygon.io API", "Recharts"],
  },
];

function Projects() {
  // will be based off of the project index (need to add that to the data)
  const [projectSelected, setProjectSelected] = useState<number>(0);
  console.log(projectSelected);

  return (
    <div className="h-full w-full relative">
      <ul className="absolute flex justify-center items-center -top-10 left-0">
        <li
          className={`${
            projectSelected === 0 ? "bg-black" : null
          } mr-4 border border-black w-3 h-3 rounded-full cursor-pointer`}
          onClick={() => setProjectSelected(0)}
        ></li>
        <li
          className={`${
            projectSelected === 1 ? "bg-black" : null
          } mr-4 border border-black w-3 h-3 rounded-full cursor-pointer`}
          onClick={() => setProjectSelected(1)}
        ></li>
        <li
          className={`${
            projectSelected === 2 ? "bg-black" : null
          } mr-4 border border-black w-3 h-3 rounded-full cursor-pointer`}
          onClick={() => setProjectSelected(2)}
        ></li>
        <li
          className={`${
            projectSelected === 3 ? "bg-black" : null
          } mr-4 border border-black w-3 h-3 rounded-full cursor-pointer`}
          onClick={() => setProjectSelected(3)}
        ></li>
      </ul>
      {/* Individual Project One */}
      {projectSelected === 0 && (
        <Project
          title={allProjects[0].title}
          image={allProjects[0].image}
          description={allProjects[0].description}
          github={allProjects[0].github}
          demo={allProjects[0].demo}
          tech={allProjects[0].tech}
        />
      )}
      {projectSelected === 1 && (
        <div className="h-full w-full border border-black">
          <Project
            title={allProjects[1].title}
            image={allProjects[1].image}
            description={allProjects[1].description}
            github={allProjects[1].github}
            demo={allProjects[1].demo}
            tech={allProjects[1].tech}
          />
        </div>
      )}
      {projectSelected === 2 && (
        <div className="h-full w-full border border-black">
          <Project
            title={allProjects[2].title}
            image={allProjects[2].image}
            description={allProjects[2].description}
            github={allProjects[2].github}
            demo={allProjects[2].demo}
            tech={allProjects[2].tech}
          />
        </div>
      )}
      {projectSelected === 3 && (
        <div className="h-full w-full border border-black">
          <Project
            title={allProjects[3].title}
            image={allProjects[3].image}
            description={allProjects[3].description}
            github={allProjects[3].github}
            demo={allProjects[3].demo}
            tech={allProjects[3].tech}
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
