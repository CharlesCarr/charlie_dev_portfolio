import React from "react";
import Image from "next/image";
import Headshot from "../../images/headshot.jpeg";

function About() {
  return (
    <section className="flex flex-col justify-center items-center h-full w-full">
      <Image
        alt="headshot"
        src={Headshot}
        width={200}
        height={200}
        objectFit="contain"
      />

      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        suscipit dolores nostrum eos ut quidem cumque sed. Voluptatibus iusto
        quas eum nesciunt nemo minus cumque excepturi sed sint? Quae, eum.
      </p>
      <div className="flex justify-center items-center">
        <div>
          <ul>
            <li>Skill One</li>
            <li>Skill One</li>
            <li>Skill One</li>
            <li>Skill One</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Skill Two</li>
            <li>Skill Two</li>
            <li>Skill Two</li>
            <li>Skill Two</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Skill Three</li>
            <li>Skill Three</li>
            <li>Skill Three</li>
            <li>Skill Three</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
