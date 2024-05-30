import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import articlePic1 from "../../public/images/articles/COVER.jpg";
import articlePic2 from "../../public/images/articles/Navigating the Decentralized Cosmos IPFS Storage with Helia Implementation in Node.js.jpg";
import articlePic3 from "../../public/images/articles/What is Mining in Blockchain.jpg";
import articlePic4 from "../../public/images/articles/What is Blockchain.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, duration: 0.2 }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:text-light dark:bg-dark dark:border-light sm:flex-col"
      initial={{ y: 100 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:text-light dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      <Link
        href={link}
        target={"_blank"}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Nikil Sri Shen | Articles Page</title>
        <meta name="description" content="Nikil's Articles" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title={
                "Decoding Web3.js: A Practical Handbook 📖 for Compiling and Deploying Smart Contracts on Ethereum 🚀✨"
              }
              time={"15 min read"}
              summary={
                "Blockchain development has revolutionized the way we think about decentralized applications, and at the heart of building these applications lies the need for tools that simplify the interaction with blockchain networks. One such indispensable tool for Ethereum-based development is Web3.js."
              }
              link={
                "https://blogchaindaily.wordpress.com/2024/01/21/decoding-web3-js-a-practical-handbook-%f0%9f%93%96-for-compiling-and-deploying-smart-contracts-on-ethereum-%f0%9f%9a%80%e2%9c%a8/"
              }
              img={articlePic1}
            />
            <FeaturedArticle
              title={
                "🌐 Navigating the Decentralized Cosmos: IPFS Storage with Helia Implementation in Node.js"
              }
              time={"10 min read"}
              summary={
                "We embark on a journey into the InterPlanetary File System (IPFS) realm, discovering how to harness the power of decentralized and distributed file storage with the Helia implementation in Node.js."
              }
              link={
                "https://blogchaindaily.wordpress.com/2023/12/29/%f0%9f%8c%90-navigating-the-decentralized-cosmos-ipfs-storage-with-helia-implementation-in-node-js/"
              }
              img={articlePic2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title={"What is Mining in Blockchain?"}
              img={articlePic3}
              date={"October 22, 2023"}
              link={
                "https://blogchaindaily.wordpress.com/2023/10/22/what-is-mining-in-blockchain/"
              }
            />
            <Article
              title={"What is Blockchain?"}
              img={articlePic4}
              date={"October 22, 2023"}
              link={
                "https://blogchaindaily.wordpress.com/2023/10/22/what-is-blockchain/"
              }
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
