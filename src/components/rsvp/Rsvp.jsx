import "./r.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Rsvp = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 1.2 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className="rsvp"
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fadeIn}
    >
      {/* Title */}
      <motion.h2 className="rsvp_title" variants={fadeUp}>
        Registry
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="rsvp_p"
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        Your love and support mean the world to us. If you would like to
        contribute to our honeymoon or wedding adventures, please visit our
        registry below.
      </motion.p>

      <br />
      <br />

      {/* Button */}
      <motion.a
        href="https://www.honeyfund.com/site/niyomugabo-chisumo-01-04-2026?no_gdpr=1"
        target="_blank"
        rel="noopener noreferrer"
        className="rsvp_btn"
        variants={zoomIn}
        transition={{ delay: 0.4 }}
      >
        View Registry
      </motion.a>

      <br />
      <br />
      <br />

      {/* Bottom text */}
      <motion.p
        className="rsvp_p"
        variants={fadeUp}
        transition={{ delay: 0.6 }}
      >
        Thank you for celebrating this special journey with us.
      </motion.p>
    </motion.div>
  );
};

export default Rsvp;
