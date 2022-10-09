import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/sections/Main";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    // <div className="relative flex min-h-screen flex-col items-center justify-center py-2 bg-zinc-900 text-slate-50 opacity-95">
    <div className="bg-zinc-600 h-100 min-h-screen flex flex-col items-center text-white">
      <Head>
        <title>Charlie Carr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="relative w-full min-h-screen">
        {/* Shapes for Background Gradient */}
        <div className="absolute top-52 left-24 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-44 right-44 w-52 h-52 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-24 left-80 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <Main />
      </div>
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
