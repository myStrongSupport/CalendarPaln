import React from "react";
import classes from "./Charven.module.css";
import { RxArrowLeft } from "react-icons/rx";
import { motion } from "framer-motion";
const Charven = () => {
  return (
    <div className={classes.arrowLeft}>
      <motion.div
        animate={{
          x: [30, -150],
          opacity: [0, 1, 0],
          scale: [0.8, 1],
        }}
        transition={{
          //   type: "spring",
          duration: 3,
          delay: 0.4,

          //   repeatDelay: 5,
          repeat: Infinity,
        }}
      >
        <RxArrowLeft size={50} />
      </motion.div>
    </div>
  );
};

export default Charven;
