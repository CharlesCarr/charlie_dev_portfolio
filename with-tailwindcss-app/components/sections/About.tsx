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
        <h1 className="text-4xl mb-3">Hi there!</h1>
        <p className="text-sm w-3/4 mb-2 leading-6">
          My name is Charlie Carr and I am a NYC-based software developer who is
          actively pursuing full time employment and open to both remote and
          in-office work.
        </p>
        <p className="text-sm w-3/4 leading-6">
            I have spent my career in tech working in enterprise software for
            both small startups as well as large tech corporations. After
            starting on the sales side of the industry, my passion and curiosity
            for these products fueled my desire to become more technical and
            attend an in person full stack coding bootcamp. Currently, I am
            focused on front-end web development and expanding my knowledge in
            Next.js and TypeScript.
          </p>
      </div>
    </section>
  );
}

export default About;
