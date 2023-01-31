import React, { useState } from "react";
import logo from "../../assets/images/logocopy.png";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
  const [clicked, setClicked] = useState(true);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.5,
      },
    },
  };

  const leftItem = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  const rightItem = {
    hidden: { opacity: 0, x: 500 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="">
      <motion.nav
        className=""
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="" variants={leftItem}>
          <Avatar src={logo} alt="" className="avatar" />
        </motion.div>
        <motion.div
          className={!clicked ? "nav-item " : "nav-item hide"}
          variants={rightItem}
        >
          <Link to="about" className="" spy={true} smooth={true}>
            About
          </Link>
          <Link to="skills" className="" spy={true} smooth={true}>
            Skills
          </Link>
          <Link to="project" className="" spy={true} smooth={true}>
            Project
          </Link>
          <Link to="contact" className="" spy={true} smooth={true}>
            Contact
          </Link>
          <a
            href="https://docs.google.com/document/d/1nKz9fXta8dZZswG0Ix5l0zwK0-0C8rChEDToKVz-w-8/export?format=pdf"
            className="btn btn-outline-primary"
          >
            Resume
          </a>
        </motion.div>
        <div className="mobile">
          {!clicked == true ? (
            <CloseIcon
              className="ham fixed"
              onClick={() => {
                clicked == true ? setClicked(false) : setClicked(true);
              }}
            />
          ) : (
            <MenuIcon
              className="ham"
              onClick={() => {
                clicked == true ? setClicked(false) : setClicked(true);
              }}
            />
          )}
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
