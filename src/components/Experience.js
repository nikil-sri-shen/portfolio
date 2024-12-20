import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold capitalize text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:time-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl text-center mb-32 w-full md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            position={"Software Engineer"}
            company={"Cisco Systems (India) Private Limited"}
            companyLink={"https://www.cisco.com/site/in/en/index.html"}
            time={"2024-present"}
            address={"Bengaluru, Karnataka"}
            work={
              "At Cisco, I work as a Full Stack Software Engineer, leveraging technologies like Python, Java, and Kotlin to develop and maintain robust applications. My role focuses on building efficient software solutions and implementing automation testing frameworks to ensure quality and reliability. As an early-career professional, I am constantly learning and growing, honing my skills in full-stack development while contributing to innovative projects that drive impact."
            }
          />
          <Details
            position={"Web3 Full Stack Developer"}
            company={"CrypticOcean Technologies Pvt. Ltd."}
            companyLink={"https://crypticocean.com/"}
            time={"2024"}
            address={"Noida, Uttar Pradesh"}
            work={
              "Collaborated on a dedicated team to develop and enhance the Vesting Application on the Stacks blockchain, utilizing the Clarity programming language. Responsibilities included designing and implementing new features, improving application security, and ensuring robust performance and reliability. Contributed to the continuous improvement of the platform by addressing vulnerabilities, optimizing code, and integrating advanced functionalities."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
