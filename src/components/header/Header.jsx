import Nav from "../nav/Nav";
import "./h.css";
import cos from "../../assets/us2.webp";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* IMAGE - subtle slow zoom-in */}
      <motion.div
        className="header_img"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img src={cos} alt="" className="header_imger" />
      </motion.div>

      {/* COUPLE NAME - elegant slide up and fade */}
      <motion.div
        className="couple_name_section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      >
        <motion.h1
          className="couple_name"
          initial={{ letterSpacing: "5px", opacity: 0 }}
          animate={{ letterSpacing: "0px", opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.6 }}
        >
          O’Neill <span className="ghot">&</span> Rachel
        </motion.h1>
        <div className="lisne"></div>
        <p className="story_p doni">
          Welcome to our wedding website! Here you'll find everything you need
          to celebrate with us. We love you and can't wait to share our special
          day with you
          <br />
          <br />
          Love Rachel and O'Neill
        </p>
        <div className="lisne r"></div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
