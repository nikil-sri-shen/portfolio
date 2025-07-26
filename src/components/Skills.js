import React from "react";
import { motion } from "framer-motion";
import {
  FaNode,
  FaPython,
  FaReact,
  FaJava,
  FaGithub,
  FaJenkins,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiWeb3Dotjs,
  SiKotlin,
  SiArgo,
  SiEthereum,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiRubyRough } from "react-icons/di";
import { Tooltip } from "react-tooltip";

const Skill = ({ Icon, x, y, label, link, id }) => (
  <>
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      data-tooltip-id={id}
      data-tooltip-content={label}
      className="absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <div
        className="flex items-center justify-center rounded-full bg-dark text-light dark:bg-light dark:text-dark p-4 shadow-dark cursor-pointer 
      lg:p-3 md:p-2 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light"
      >
        <Icon className="text-3xl md:text-2xl xs:text-xl" />
      </div>
    </motion.a>
    <Tooltip id={id} />
  </>
);

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="relative aspect-square w-24 rounded-full bg-yellow-500 dark:bg-gray-200 shadow-lg cursor-pointer animate-pulseSoft
    lg:w-32 md:w-28 sm:w-24 xs:w-20"
        >
          {/* Text centered inside without stretching */}
          <span className="absolute inset-0 flex items-center justify-center text-dark dark:text-dark font-semibold text-lg">
            Skills
          </span>

          {/* Spinning layers — sun in light mode, moon in dark mode */}
          <div className="absolute inset-0 rounded-full -z-10 animate-spin-slow">
            {/* ☀️ Sun Layers (light mode) */}
            <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-70 dark:hidden" />
            <div className="absolute -inset-4 rounded-full bg-yellow-300 opacity-50 dark:hidden" />
            <div className="absolute -inset-8 rounded-full bg-yellow-200 opacity-30 dark:hidden" />
            <div className="absolute -inset-12 rounded-full bg-yellow-100 opacity-20 dark:hidden" />

            {/* 🌙 Moon Layers (dark mode) */}
            <div className="absolute inset-0 rounded-full bg-gray-300 opacity-60 hidden dark:block" />
            <div className="absolute -inset-4 rounded-full bg-slate-200 opacity-40 blur-md hidden dark:block" />
            <div className="absolute -inset-8 rounded-full bg-slate-100 opacity-30 blur-lg hidden dark:block" />
            <div className="absolute -inset-12 rounded-full bg-white opacity-20 blur-2xl hidden dark:block" />
          </div>
        </motion.div>

        {/* Skills with tooltip and links */}
        <Skill
          Icon={FaNode}
          x="-20vw"
          y="2vw"
          label="Node.js"
          link="https://nodejs.org"
          id="node"
        />
        <Skill
          Icon={IoLogoJavascript}
          x="-5vw"
          y="-10vw"
          label="JavaScript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          id="js"
        />
        <Skill
          Icon={FaPython}
          x="19vw"
          y="4vw"
          label="Python"
          link="https://www.python.org"
          id="python"
        />
        <Skill
          Icon={SiKotlin}
          x="0vw"
          y="12vw"
          label="Kotlin"
          link="https://kotlinlang.org"
          id="kotlin"
        />
        <Skill
          Icon={FaReact}
          x="-20vw"
          y="-15vw"
          label="React.js"
          link="https://reactjs.org"
          id="react"
        />
        <Skill
          Icon={FaJava}
          x="15vw"
          y="-12vw"
          label="Java"
          link="https://www.oracle.com/java/"
          id="java"
        />
        <Skill
          Icon={DiRubyRough}
          x="32vw"
          y="-5vw"
          label="Ruby"
          link="https://www.ruby-lang.org"
          id="ruby"
        />
        <Skill
          Icon={SiMongodb}
          x="-25vw"
          y="18vw"
          label="MongoDB"
          link="https://www.mongodb.com"
          id="mongodb"
        />
        <Skill
          Icon={FaGithub}
          x="14vw"
          y="21vw"
          label="GitHub"
          link="https://github.com"
          id="github"
        />
        <Skill
          Icon={FaJenkins}
          x="0vw"
          y="-20vw"
          label="Jenkins"
          link="https://www.jenkins.io"
          id="jenkins"
        />
        <Skill
          Icon={SiArgo}
          x="-32vw"
          y="4vw"
          label="ArgoCD"
          link="https://argo-cd.readthedocs.io"
          id="argocd"
        />
        <Skill
          Icon={FaDocker}
          x="-38vw"
          y="-8vw"
          label="Docker"
          link="https://www.docker.com"
          id="docker"
        />
        <Skill
          Icon={SiEthereum}
          x="25vw"
          y="-18vw"
          label="Ethereum"
          link="https://ethereum.org"
          id="eth"
        />
        <Skill
          Icon={SiWeb3Dotjs}
          x="35vw"
          y="12vw"
          label="Web3.js"
          link="https://web3js.readthedocs.io"
          id="web3"
        />
      </div>
    </>
  );
};

export default Skills;
