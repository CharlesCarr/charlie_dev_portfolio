import React from "react";

const Skills = () => {
  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Firebase",
    "Git",
    "Github",
    "Figma",
    "Material UI",
    "Chakra UI",
    "Bootstrap",
    "Redux",
    "Node",
    "MongoDB",
    "Express",
    "Mongoose",
    "D3",
    "RXJS",
  ];

  return (
    <section className="flex flex-col justify-start items-center px-42 py-24 w-full h-screen">
      <h1 className="mb-10 text-3xl">SKILLS.</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-14 gap-y-8 text-center">
        {skills.map((skill: string) => {
          // return <p className="border-2 text-center py-2 px-3 text-xs">{skill}</p>;
          return (
            <>
              <a
                // href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-neutral-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black group-hover:border-white"></span>
                <span className="relative text-black group-hover:text-white">
                  {skill}
                </span>
              </a>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;


{/* <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
<span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span class="relative">Button Text</span>
</a> */}