import "./vt.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Vtimeline = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="vs" ref={ref}>
      <div className="vtime_line">
        <h1 className="timeline_title">timeline</h1>

        <div className="vtimeline_grid">
          <motion.div className="vtimeline_sub vone" variants={itemVariant} initial="hidden" animate={controls}>
            <h2 className="vtimeline_title">Doors Open to Guests</h2>
            <h3 className="vtime">2:45 PM</h3>
            <p className="v_paras">Leave an Audio Message in the Audio Guestbook</p>
          </motion.div>

          <div className="vtimeline_sub hee"></div>
          <div className="vtimeline_sub hee"></div>

          <motion.div className="vtimeline_sub doxy" variants={itemVariant} initial="hidden" animate={controls}>
            <h2 className="vtimeline_title">Ceremony</h2>
            <h3 className="vtime">3:30 PM</h3>
            <p className="v_paras">Time to Tie the Knot</p>
          </motion.div>

          <div className="vtimeline_sub hee"></div>
          <div className="vtimeline_sub hee"></div>

          <motion.div className="vtimeline_sub vone" variants={itemVariant} initial="hidden" animate={controls}>
            <h2 className="vtimeline_title">Cocktail Hour</h2>
            <h3 className="vtime">4:20 PM</h3>
            <p className="v_paras">Refreshments & Conversations</p>
          </motion.div>

          <div className="vtimeline_sub hee"></div>
          <div className="vtimeline_sub hee"></div>

          <motion.div className="vtimeline_sub" variants={itemVariant} initial="hidden" animate={controls}>
            <h2 className="vtimeline_title">Take Your Seat</h2>
            <h3 className="vtime">5:20 PM</h3>
            <p className="v_paras">Reception is About to Begin</p>
          </motion.div>

          <div className="vtimeline_sub hee"></div>
          <div className="vtimeline_sub hee"></div>

          <motion.div className="vtimeline_sub vone" variants={itemVariant} initial="hidden" animate={controls}>
            <h2 className="vtimeline_title">Send-Off</h2>
            <h3 className="vtime">9:00 PM</h3>
            <p className="v_paras">Celebrate our grand farewell with sparklers</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vtimeline;
