import './Projects.scss';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

import portfolioImage from './images/portfolio.jpeg';
import quotablesImage from './images/quotables.jpeg';
import todoImage from './images/todo.png';

const items = [
  {
    id: 1,
    title: 'Quotables',
    img: quotablesImage,
    description:
      "Quotables is more than just a platform; it's an expression of inspiration. With seamless user authentication, secure JWT implementation, and a sleek MERN stack foundation (MongoDB, Express.js, React, Node.js), users can effortlessly sign up, log in, and share their favorite quotes with the world.",
    liveUrl: 'https://quotables.onrender.com/',
    repoUrl: 'https://github.com/Rabbul-Khan/Quotables',
  },

  {
    id: 2,
    title: 'Personal Portfolio',
    img: portfolioImage,
    description:
      'Crafted with HTML, CSS, JavaScript, React, and brought to life with Framer Motion, the portfolio encapsulates my passion for clean code and captivating design.',
    liveUrl: '#',
    repoUrl: 'https://github.com/Rabbul-Khan/personal-portfolio',
  },
  {
    id: 3,
    title: 'Todo.io',
    img: todoImage,
    description:
      ' Todo.io is a sleek and efficient web app designed to simplify your daily life. Built with HTML, CSS, and JavaScript, Todo.io empowers users to seamlessly manage tasks and projects with ease.',
    liveUrl: 'https://rabbul-khan.github.io/ToDo.io/',
    repoUrl: 'https://github.com/Rabbul-Khan/ToDo.io',
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="project">
      <div className="imageContainer">
        <img
          src={item.img}
          alt="Project thumbnail"
          ref={ref}
          width={16}
          height={9}
        />
      </div>
      <motion.div className="textContainer" style={{ y }}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="btnContainer">
          {item.title === 'Personal portfolio' ? (
            <button onClick={() => window.scrollTo(0, 0)}>Live link</button>
          ) : (
            <button onClick={() => window.open(item.liveUrl, '_blank')}>
              Live link
            </button>
          )}
          <button onClick={() => window.open(item.repoUrl, '_blank')}>
            GitHub Repo
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Projects;
