import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDownward,
  Email,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";
import robert from "../../assets/images/robert.jpg";

function Home() {
  const container = {
    hidden: {},
    show: {
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.85,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: {
      x: -1000,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.85,
      },
    },
    show: {
      x: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.85,
      },
    },
  };
  const scale = {
    scale: 1.5,
  };

  return (
    <div className="home" id="home">
      <motion.div
        className="hero__window"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero__title">
          <motion.span className="role" variants={item}>
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Frontend",
                1000,
                "Backend",
                1000,
                "Fullstack",
                1000,
              ]}
              repeat={Infinity}
              speed={40}
            />
          </motion.span>
          <motion.h1 variants={item} className="hero__title__text ">
            Robert Quartey
          </motion.h1>
        </div>
        <motion.h2 className=" love text-muted" variants={item}>
          I build things for the web
        </motion.h2>
        <motion.p className="home__interest" variants={item}>
          I'm a Software enginecomputer science major and i have a lot of
          interest in solving problems and trying new technologies out.
        </motion.p>
        <motion.a
          href="https://www.linkedin.com/in/robert-quartey-772b69193/"
          className="btn linkedin"
          variants={item}
          target="_blank"
        >
          LinkedIn
        </motion.a>

        <motion.div className="portfolio__side" variants={container}>
          <div className="social">
            <span className="text after">say hello</span>
            <span className="line"></span>
            <motion.a href="" className="" whileHover={scale}>
              <Email />
            </motion.a>
            <span className="line"></span>
            <span className="text before">fellow me</span>
          </div>
          <div className="socials">
            <motion.a href="" whileHover={scale}>
              <GitHub />
            </motion.a>
            <motion.a href="" whileHover={scale}>
              <LinkedIn />
            </motion.a>
            <motion.a href="" whileHover={scale}>
              <Instagram />
            </motion.a>
          </div>
        </motion.div>
        <motion.div></motion.div>
      </motion.div>
      <div className="home__right">
        <img src={robert} alt="" className="right__image" />
      </div>
    </div>
  );
}

export default Home;
