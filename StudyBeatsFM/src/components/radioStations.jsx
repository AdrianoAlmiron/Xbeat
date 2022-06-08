import React from "react";
import { motion } from "framer-motion";
import triangle from "../images/playBtn.png";

const RadioStations = ({
  Ambient,
  Anime,
  Astral,
  ChillHop,
  Cow,
  Spinnin,
  Ivy,
  High,
  Lofi,
  Study,
  Jazz,
  Nice
}) => {
  return (
    <div className="radioList">
      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Ambient}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          lo mas nuevo!
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Anime}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          rkt turreo 
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.25 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Astral}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Reggaeton
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.35 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={ChillHop}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          cumbia clasicos
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.45 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Cow}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          electro house
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.65 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Ivy}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          trap argentino
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.75 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={High}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          trap internacional
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.85 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Lofi}
          className="station">
          <img className="triangle" src={triangle} alt="" />
          <span> hip hop 90/00 </span>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Nice}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          <span> chill </span>
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.95 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Spinnin}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Para local
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.05 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Study}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          Tn noticias
        </motion.div>
      </motion.div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 1.15 }}>
        <motion.div
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.9 }}
          onClick={Jazz}
          className="station"
        >
          <img className="triangle" src={triangle} alt="" />
          FMS en vivo
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RadioStations;
