import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/sections/Main";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Footer from "../components/Footer";
import Skills from "../components/sections/Skills";

const Home: NextPage = () => {
  return (
    // <div className="relative flex min-h-screen flex-col items-center justify-center py-2 bg-zinc-900 text-slate-50 opacity-95">
    <div className="bg-neutral-900 h-full flex flex-col items-center text-white font-poppins">
      <Head>
        <title>Charlie Carr</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      {/* <div className="relative w-full min-h-screen"> */}
        {/* Shapes for Background Gradient */}
        {/* <div className="absolute top-52 left-24 w-52 h-52 bg-cyan-300 rounded-full mix-blend-lighten filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute top-24 left-24 w-52 h-52 bg-teal-100 rounded-full mix-blend-lighten filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute top-44 right-44 w-52 h-52 bg-teal-300 rounded-full mix-blend-lighten filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 left-96 w-32 h-32 bg-orange-400 rounded-full mix-blend-lighten filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div> */}
        <Main />
      {/* </div> */}
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
