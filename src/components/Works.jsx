import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px] flex flex-col'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex-1'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const projectsPerPage = 3;
  const totalProjects = projects.length;
  const totalGroups = Math.ceil(totalProjects / projectsPerPage);

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + projectsPerPage;
      const newIndex = nextIndex >= totalProjects ? 0 : nextIndex;
      setActiveDot(Math.floor(newIndex / projectsPerPage));
      return newIndex;
    });
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexCalc = prevIndex - projectsPerPage;
      const newIndex = prevIndexCalc < 0 ? Math.max(0, totalProjects - projectsPerPage) : prevIndexCalc;
      setActiveDot(Math.floor(newIndex / projectsPerPage));
      return newIndex;
    });
  };



  const visibleProjects = [];
  for (let i = 0; i < projectsPerPage; i++) {
    visibleProjects.push(projects[(currentIndex + i) % totalProjects]);
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 relative'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
          {visibleProjects.map((project, index) => (
            <div key={`project-${index}`} className='sm:w-[360px] w-full'>
              <ProjectCard index={index} {...project} />
            </div>
          ))}
        </div>

        <div className='flex justify-center items-center mt-12 gap-16 relative'>
          <motion.button
            onClick={prevProjects}
            className='text-[#915EFF] hover:text-[#7C3AED] cursor-pointer transition-all duration-300 p-3 rounded-full bg-tertiary border-2 border-[#915EFF] hover:border-[#7C3AED] relative'
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className='text-white'
              whileHover={{ x: -2, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </motion.button>

          {/* Dots representing project groups */}
          <div className='flex items-center gap-2'>
            {Array.from({ length: totalGroups }, (_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  index === activeDot ? 'bg-[#915EFF]' : 'bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.5 }}
                animate={{
                  scale: index === activeDot ? 1.3 : 1,
                  backgroundColor: index === activeDot ? '#915EFF' : '#9CA3AF'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => {
                  setCurrentIndex(index * projectsPerPage);
                  setActiveDot(index);
                }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextProjects}
            className='text-[#915EFF] hover:text-[#7C3AED] cursor-pointer transition-all duration-300 p-3 rounded-full bg-tertiary border-2 border-[#915EFF] hover:border-[#7C3AED] relative'
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className='text-white'
              whileHover={{ x: 2, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </motion.button>
        </div>

        <div className='mt-10 text-center'>
          <p className='text-secondary text-[16px]'>
            For more project visit my Github <a href="https://github.com/Vishwaschandrasekara5" target="_blank" rel="noopener noreferrer" className='text-[#915EFF] hover:text-[#7C3AED]'>Vishwa S Chandrasekara</a>
          </p>
        </div>

      </div>
    </>
  );
};
export default SectionWrapper(Works, "");
