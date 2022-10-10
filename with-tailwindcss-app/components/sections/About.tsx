import React from "react";
import Image from "next/image";
import Headshot from "../../images/headshot.jpeg";

function About() {
  return (
    <section className="flex justify-center items-center px-32 h-screen">
      <div className="w-1/2 flex justify-center items-center">
        <Image
          alt="headshot"
          src={Headshot}
          width={325}
          height={325}
          objectFit="contain"
          // style=""
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-start">
        <h1 className="text-4xl mb-3 text-sky-500">Hi there!</h1>
        <p className="text-sm w-3/4 mb-2 leading-6">
          My name is Charlie Carr and I am a NYC-based software developer. I am
          currently pursuing my next opportunity and open to both remote and
          in-office work.
        </p>
        <p className="text-sm w-3/4 mb-2 leading-6">
          I have spent my career in tech working in enterprise software for both
          small startups as well as large tech corporations. After starting in
          software sales, my passion and curiosity for these products fueled my
          desire to become more technical and attend a full stack web development
          coding bootcamp.
        </p>
        <p className="text-sm w-3/4 leading-6">
          I recently finished my first engineering role as a front end development
          intern for{" "}
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
