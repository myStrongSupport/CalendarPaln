import React from "react";
import { motion } from "framer-motion";
import classes from "./SideBarVideo.module.css";
const SideBarVideo = () => {
  return (
    <motion.div
      className={classes.videoList}
      initial={{ width: 0 }}
      animate={{
        width: 192,
      }}
      exit={{
        width: 0,
      }}
    >
      <ul className={classes.list}>
        <li>Anime</li>
        <li>City</li>
        <li>Nature</li>
        <li>Movies</li>
      </ul>
    </motion.div>
  );
};

export default SideBarVideo;
