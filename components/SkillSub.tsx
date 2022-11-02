import React from "react";

// interface SkillSubProps {
//     content: string[];
// }

const SkillSub = ({ category, skills }: any) => {
  return (
    <div className="flex flex-col justify-center items-center py-6 px-3">
      <p className="text-lg font-bold border-b-2 border-black w-full text-center mb-4 pb-3">
        {category}
      </p>
      <div className="flex justify-center items-center w-full h-full mt-3">
        <ul className={`grid ${category === 'Languages' ? "grid-cols-1" : "grid-cols-2"} w-full h-full list-none gap-y-4 text-center`}>
          {skills.map((skill: string) => (<li className="text-sm sm:text-base text-center font-light flex justify-center items-center">{skill}</li>))}
        </ul>
      </div>
    </div>
  );
};

export default SkillSub;
