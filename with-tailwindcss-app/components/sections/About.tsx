import React from "react";
import Image from "next/image";
import Headshot from "../../images/headshot.jpeg";

function About() {
  return (
    <section className="flex flex-col justify-center items-center h-full w-full px-32">
      <div className="flex w-full justify-center items-center pb-24">
        <div className="w-1/2 flex justify-start items-center">
          <Image
            alt="headshot"
            src={Headshot}
            width={250}
            height={250}
            objectFit="contain"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-start">
          <h1 className="text-4xl">Hi there!</h1>
          <p className="text-sm w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            consequatur reiciendis cumque? Unde neque accusamus veniam, itaque,
            fuga cum dicta eum totam placeat nulla quibusdam.
          </p>
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-1/2 flex flex-col justify-center items-start">
          <h1 className="text-xl">My Career So Far</h1>
          <p className="text-sm w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            veritatis expedita delectus perferendis ad id. Minus, veritatis
            soluta earum quos voluptates eaque incidunt quis tenetur dolor,
            tempore perferendis harum dignissimos aut cumque nam magni
            quibusdam, a sed ad quia enim laudantium! Exercitationem rerum,
            reprehenderit illum quod sed vitae ipsum earum magnam consequuntur
            alias ratione aliquid praesentium porro? Possimus, dolor vel!
          </p>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          {/* map over list of skills */}
          (WORD CLOUD OF SKILLS)
        </div>
      </div>
    </section>
  );
}

export default About;
