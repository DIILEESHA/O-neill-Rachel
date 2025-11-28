import "./t.css";
import seat from "../../assets/seated.png";
import ant from "../../assets/a.png";
import band from "../../assets/b.png";
import wedding from "../../assets/c.png";
import cake from "../../assets/cc.png";
import photo from "../../assets/p.png";
import dance from "../../assets/da.png";
import last from "../../assets/mu.png";
import fire from "../../assets/ff.png";
import guest from "../../assets/gg.png";
import night from "../../assets/nn.png";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Timeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });

  // Wedding vibe animations
  const leftFade = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const rightFade = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.25, // smooth timeline wave
      },
    },
  };

const timelineData = [
  { icon: guest, time: "2:45 PM", text: "Doors Open to Guests / Leave an Audio Message in the Audio Guestbook" },
  { icon: wedding, time: "3:30 PM", text: "Ceremony – Time to Tie the Knot" },
  { icon: ant, time: "4:20 PM", text: "Cocktail Hour – Refreshments & Conversations" },
  { icon: seat, time: "5:20 PM", text: "Take Your Seat – Reception is About to Begin" },
  { icon: fire, time: "9:00 PM", text: "Grand Sparkler Send-Off" },
];

  return (
    <div className="timeline">
      <motion.h1
        className="timeline_title"
        initial={{ opacity: 0, letterSpacing: "5px" }}
        animate={{ opacity: 1, letterSpacing: "0px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        timeline
      </motion.h1>

      {/* Timeline container */}
      <motion.div
        ref={ref}
        className="timeline_grid"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {timelineData.map((item, index) => (
          <>
            {/* Icon */}
            <motion.div
              className="timeline_sub icon_sub"
              variants={leftFade}
              key={`icon-${index}`}
            >
              <img src={item.icon} alt="" className="timeline_icon" />
            </motion.div>

            {/* Text */}
            <motion.div
              className="timeline_sub"
              variants={rightFade}
              key={`text-${index}`}
            >
              <h2 className="event_actual_time">{item.time}</h2>
              <p className="actual_timeline">{item.text}</p>
            </motion.div>
          </>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
