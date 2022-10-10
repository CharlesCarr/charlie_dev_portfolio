import React from "react";
import Image from "next/image";
import Headshot from "../../images/headshot.jpeg";

function About() {
  return (
    <section className="sm:grid sm:grid-cols-2 mt-32 px-0 lg:px-44 h-96 sm:h-screen w-full mb-96 sm:mb-0">
      <div className="w-full h-3/4 sm:h-1/3 md:h-1/2 relative ml-0 sm:ml-5 md:ml-0 mb-40 sm:mb-0">
        <Image
          alt="headshot"
          src={Headshot}
          objectFit="contain"
          layout="fill"
        />
      </div>

      <div className="w-full h-1/2 flex flex-col justify-center items-center sm:items-start text-sm xl:text-base text-center sm:text-start px-5 sm:px-0">
        <h1 className="text-3xl xl:text-4xl mb-3 text-sky-500">Hi there!</h1>
        <p className="w-full xl:w-3/4 mb-2 leading-6 sm:pr-8 xl:pr-0">
          My name is Charlie Carr and I am a NYC-based software developer. I am
          currently pursuing my next opportunity and open to both remote and
          in-office work.
        </p>
        <p className="w-full xl:w-3/4 mb-2 leading-6 sm:pr-8 xl:pr-0">
          I have spent my career in tech working in enterprise software for both
          small startups as well as large tech corporations. After starting in
          software sales, my passion and curiosity for these products fueled my
          desire to become more technical and attend a full stack web
          development coding bootcamp.
        </p>
        <p className="w-full xl:w-3/4 leading-6 sm:pr-8 xl:pr-0">
          I recently finished my first engineering role as a front end
          development intern for{" "}
          <a
            href="https://www.reveliolabs.com/"
            target="_blank"
            className="underline text-sky-300"
          >
            Revelio Labs
          </a>
          , a labor market data platform, where I actively contributed to the
          React/TypeScript code base.
        </p>
      </div>
    </section>
  );
}

export default About;
