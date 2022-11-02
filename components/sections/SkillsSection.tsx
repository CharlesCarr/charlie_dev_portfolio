import SkillSub from "../SkillSub";

const Skills = () => {
  // const skills = [


  //   "Node",
  //   "MongoDB",


  // ];

  // Categories of skills - Languages, Hosting/Version Control, Responsive Design, Libraries/Frameworks

  const allSkills = [
    {
      skillCat: "Languages",
      skillArr: [
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Python (Learning)",
      ],
    },
    {
      skillCat: "Frameworks / Libraries",
      skillArr: [
        "React",
        "Redux",
        "Next.js",
        "Node",
        "Express",
        "Mongoose",
        "D3",
        "RxJS",
        "Mocha",
        "Jest"
      ],
    },
    {
      skillCat: "UI / UX Design",
      skillArr: [
        "Tailwind CSS",
        "Chakra UI",
        "Material UI",
        "Bootstrap",
        "Figma",
      ],
    },
    {
      skillCat: "Version Control / Hosting",
      skillArr: [
        "Git",
        "GitHub",
        "Firebase",
        "Vercel",
      ],
    },
  ];

  return (
    <>
      <div className="h-full w-1/4 border mr-2">
        <SkillSub category={allSkills[0].skillCat} skills={allSkills[0].skillArr} />
      </div>
      <div className="h-full w-2/4 border mr-2">
        <SkillSub category={allSkills[1].skillCat} skills={allSkills[1].skillArr} />
      </div>
      <div className="h-full w-1/4 border flex flex-col justify-center items-center">
        <div className="h-1/2 w-full">
          <SkillSub
            category={allSkills[2].skillCat}
            skills={allSkills[2].skillArr}
          />
        </div>
        <div className="h-1/2 w-full">
          <SkillSub
            category={allSkills[3].skillCat}
            skills={allSkills[3].skillArr}
          />
        </div>
      </div>
    </>
  );
};

export default Skills;

{
  /* <h1 className="mb-10 text-3xl">SKILLS.</h1>
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
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black group-hover:border-white transition duration-500 ease-out"></span>
          <span className="relative text-black group-hover:text-white transition duration-500 ease-out">
            {skill}
          </span>
        </a>
      </>
    );
  })}
</div> */
}

{
  /* <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
<span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
<span class="relative">Button Text</span>
</a> */
}
