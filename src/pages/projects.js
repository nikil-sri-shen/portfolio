import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../public/images/projects/CryptoWatchers.png";
import project2 from "../../public/images/projects/WikiChain.png";
import project3 from "../../public/images/projects/EtherJots.png";
import project4 from "../../public/images/projects/PUC.png";
import project5 from "../../public/images/projects/HyperJots.png";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pt-6 lg:pl-0">
        <span className="text-primary dark:text-primaryDark text-xl font-medium xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4x">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-rigth-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark text-xl font-medium lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target={"_blank"} className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Nikil Sri Shen | Projects Page</title>
        <meta name="description" content="Nikil's Projects..." />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="p-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"HyperJots"}
                summary={
                  "HyperJots is a blockchain-based secure note-sharing platform built on Hyperledger Fabric. It ensures private, tamper-proof note management for organizations, leveraging ReactJS for the frontend, Node.js for the backend, and smart contracts for secure data handling."
                }
                link={"https://github.com/nikil-sri-shen/HyperJots"}
                type={"Featured Project"}
                github={"https://github.com/nikil-sri-shen/HyperJots"}
                img={project5}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"CryptoWatchers"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and CoinGecko. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"https://crypto-watchers.netlify.app/"}
                type={"Featured Project"}
                github={"https://github.com/nikil-sri-shen/crypto-watcher"}
                img={project1}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"EtherJots - A Decentralised Notes App"}
                link={"https://ether-jots.netlify.app/"}
                type={"Featured Project"}
                github={"https://github.com/nikil-sri-shen/EtherJots"}
                img={project3}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"PUC - pollution under control certification system"}
                link={"https://puc-certificate.netlify.app/"}
                type={"Featured Project"}
                github={
                  "https://github.com/nikil-sri-shen/puc-certification-ethereum"
                }
                img={project4}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={
                  "WikiChain: An Improved Resilient, Pseudo-Transparent Knowledge Base"
                }
                summary={
                  "WikiChain is a decentralized platform that aims to revolutionize the concept of online encyclopedias, taking inspiration from Wikipedia. Built on blockchain technology, WikiChain ensures transparency, security, and user empowerment. Users can register, publish articles, and search for information in a decentralized environment."
                }
                link={"https://wikichain-nikil.netlify.app/"}
                type={"Featured Project"}
                github={"https://github.com/nikil-sri-shen/Wikichain"}
                img={project2}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
