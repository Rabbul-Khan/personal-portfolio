import './Introduction.scss';

import { motion } from 'framer-motion';

const skills = [
  'TypeScript',
  'JavaScript',
  'Vue.js',
  'React',
  'NextJs',
  'Tailwind CSS',
  'Nodejs',
  'Express',
  'MongoDB',
  'CSS',
  'HTML',
  'Sass',
  'Git',
];

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      ease: 'linear',
    },
  }),
};

const Introduction = () => {
  return (
    <motion.div
      className="intro"
      variants={textVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="intro__edu-skills">
        <div className="intro__experience">
          <motion.h1 variants={textVariants}>Experience</motion.h1>
          <div className="textBlock">
            <div className="experienceRole">Junior Frontend Developer</div>
            <div>
              <b>Dhaka Popular Travel</b>
            </div>
            <div>
              <i>Jun. 2024 - Current</i>
            </div>
            <div>Dhaka, Bangladesh</div>
          </div>
        </div>

        <div className="intro__skills">
          <motion.h1 variants={textVariants}>Skills</motion.h1>

          <ul>
            {skills.map((skill, index) => {
              return (
                <motion.li
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="intro__education">
        <motion.h1 variants={textVariants}>Education</motion.h1>
        <div className="textBlock">
          <div>
            <b>MS in Computer Science and Engineering</b>
          </div>
          <div>
            <i>North South University, 2021-2022</i>
          </div>
        </div>
        <div className="textBlock">
          <div>
            <b>BS in Electrical and Electronics Engineering</b>
          </div>
          <div>
            <i>North South University, 2016-2020</i>
          </div>
        </div>
      </div>

      <div className="intro__publications">
        <motion.h1 variants={textVariants}>Publications</motion.h1>
        <div className="textBlock">
          <div>
            <b>
              “Performance Comparison Among Hybrid NOMA Schemes Focusing on
              Outage Performance and Sum Rate Arrangement”
            </b>
          </div>
          <div>A. Bal, M. R. H. Khan, and M. M. K. Peyal</div>
          <div>
            IEEE 2nd International Conference on Emerging Technology (INCET
            2021), Belgaum, India,
          </div>
          <div>DOI: 10.1109/INCET51464.2021.9456318</div>
        </div>
        <div className="textBlock">
          <div>
            <b>
              “An Analytical Investigation of Finite Blocklength Information
              Theory”
            </b>
          </div>
          <div>S. R. Sabuj, M. R. H. Khan and M. O. Ziad</div>
          <div>
            2020 IEEE Region 10 Symposium (TENSYMP), Dhaka, Bangladesh, 2020,
          </div>
          <div>pp.568-571, DOI: 10.1109/TENSYMP50017.9230625</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;
