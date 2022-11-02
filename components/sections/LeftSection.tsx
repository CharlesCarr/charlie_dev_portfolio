// import React from "react";
// import Image from "next/image";
// import Headshot from "../../images/headshot.jpeg";

function LeftSection() {
  return (
    <section className="w-1/4 h-full flex flex-col border border-black px-12 py-6">
      <div className="w-full h-1/2 flex flex-col justify-center items-center border">
        {/* <div className="flex justify-center items-center">
          <p className="text-xs">headshot</p>
        </div>
        <div className="text-white bg-black h-1/2 w-3/4 flex justify-center items-center">
          img
        </div>
        <div className="h-1/4 flex justify-center items-center">
          <p className="text-xs">headshot</p>
        </div> */}
      </div>

      <div className="w-full h-1/2 flex flex-col justify-center items-center border mt-10">
        {/* <ul className="flex justify-center items-center m-0 p-0">
          <li className="border rounded-full w-6 h-6 flex justify-center items-center text-xs">
            li
          </li>
          <li className="border rounded-full w-6 h-6 flex justify-center items-center text-xs">
            gh
          </li>
        </ul>
        <p className="text-xs">Shorter Bio</p> */}
      </div>
    </section>
  );
}

export default LeftSection;

{
  /* <div className="w-full h-3/4 sm:h-1/3 md:h-1/2 relative ml-0 sm:ml-5 md:ml-0 mb-40 sm:mb-0">
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
      </div> */
}
