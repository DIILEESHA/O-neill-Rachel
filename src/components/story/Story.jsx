import "./s.css";
import str from "../../assets/us3.webp";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const Story = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const inView1 = useInView(ref1, { once: true, margin: "-150px" });
  const inView2 = useInView(ref2, { once: true, margin: "-150px" });

  const [showMore, setShowMore] = useState(false);

  // Unique animations
  const zoomFade = {
    hidden: { opacity: 0, scale: 1.1 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const titleFade = {
    hidden: { opacity: 0, letterSpacing: "5px" },
    show: {
      opacity: 1,
      letterSpacing: "0px",
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  return (
    <div className="story">
      {/* FIRST BLOCK */}
      <div ref={ref1} className="story_grid oo">
        {/* Left Image - zoom fade */}
        <motion.div
          className="story_sub dd"
          variants={zoomFade}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
        >
          <img src={str} alt="" className="story_img mar" />
        </motion.div>

        {/* Text - slide right */}
        <motion.div
          className="story_sub ui"
          variants={slideRight}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
        >
          <motion.h2
            className="strory_title"
            variants={titleFade}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
          >
            our story
          </motion.h2>

          {/* STORY TEXT + SHOW MORE BUTTON */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
          >
            <p className={`story_p ${showMore ? "open" : "closed"}`}>
              Our story began in the winter of 2023 in the most unexpected but
              God-orchestrated way through family. Rachel had just moved to the
              U.S. and wasn’t sure how or when she’d meet someone who truly
              matched her spirit. During a simple conversation, she mentioned to
              her brother-in-law, Fadhili, that she’d be open to meeting
              someone. What she didn’t know was that those few words would set
              everything in motion. A few weeks later, while O’Neill was
              preparing to fly to Rwanda for Christmas, Fadhili told him about
              Rachel (his sister-in-law) who had recently moved from Korea and
              felt she might be a good match. He shared her number and photo,
              trusting God to do the rest.
              <br />
              <br />
              On Christmas Eve, while O’Neill was with his parents in Rwanda,
              Rachel sent a simple message introducing herself. That small act
              of courage sparked a conversation that felt peaceful and genuine
              from the very beginning. Once O’Neill returned to the U.S., their
              conversations grew deeper, more intentional, and surprisingly
              effortless; something both of them quietly recognized as God’s
              hand.
              <br />
              <br />
              On January 21st, they finally met in person. They spent the day at
              NASA and then the Houston Aquarium, sharing stories, laughter, and
              a natural sense of comfort that made the day unforgettable. Soon
              after, O’Neill began making the three-hour drive to Houston every
              other weekend not because he had to, but because being with Rachel
              felt right, steady, and God-led.
              <br />
              <br />
              What started with one simple text and a nudge from family became
              the beginning of a love story that neither of them could have
              planned on their own. We both know that our story didn’t happen by
              accident. From the timing, to the conversations, to the peace we
              felt from day one—God was aligning our paths long before we knew
              it.
              <br />
              <br />
              Now, as we prepare for our wedding, we’re grateful for the
              beautiful way He brought our lives together. And we look forward
              to building a home filled with love, purpose, and faith side by
              side. We can’t wait to celebrate this moment with you. May God
              bless you richly for being part of our journey.
            </p>

            <button
              className="story_btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "See Less" : "See More"}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* SECOND BLOCK */}
      <div ref={ref2} className="story_grid ooo">
        {/* Details Text - fade up */}
        <motion.div
          className="story_sub mi"
          variants={fadeUp}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
        >
          <motion.h2
            className="strory_title qa"
            variants={titleFade}
            initial="hidden"
            animate={inView2 ? "show" : "hidden"}
          >
            details
          </motion.h2>

          <motion.div
            className="story_detail_grid"
            variants={fadeUp}
            initial="hidden"
            animate={inView2 ? "show" : "hidden"}
          >
            <div className="story_grid_ul toper">
              <ul className="story_ul">
                <li className="story_li tum">date</li>
                <li className="story_li tum">ceremony time</li>
                <li className="story_li tum">venue</li>
                <li className="story_li tum">dress code</li>
              </ul>
            </div>

            <div className="story_grid_ul down">
              <ul className="story_ul">
                <li className="story_li">January 4, 2026</li>
                <li className="story_li">03:30 PM</li>
                <li className="story_li">
                  <a
                    href="https://www.chateaunouvelle.com/"
                    target="_blank"
                    style={{ color: "inherit" }}
                  >
                    Chateau Nouvelle
                  </a>
                </li>
                <li className="story_li">Semi-Formal</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="story_sub"
          variants={slideLeft}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
        >
          <video
            src="https://video.wixstatic.com/video/5f836a_50acd1f4d90d42d8a6f3d38ec8477fe6/1080p/mp4/file.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="story_img cd"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Story;
