import './Experience.scss';

import { motion } from 'framer-motion';

const titleVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'linear',
    },
  },
};

const Experience = () => {
  return (
    <motion.div
      className="experience"
      variants={titleVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <motion.h1 className="experience__title" variants={titleVariants}>
        <span className="titleIcon" aria-hidden="true"></span>
        Experience
      </motion.h1>

      <motion.div className="experience__card" variants={cardVariants}>
        <div className="experience__role">Junior Frontend Developer</div>
        <div className="experience__company">Dhaka Popular Travel</div>
        <div className="experience__meta">
          <span>Jun. 2024 - Current</span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
