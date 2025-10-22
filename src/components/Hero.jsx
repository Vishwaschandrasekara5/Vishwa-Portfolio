import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full-Stack Developer \nIoT Enthusiast | Coding with Vibes";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let pauseCounter = 0;

    const timer = setInterval(() => {
      if (pauseCounter > 0) {
        pauseCounter--;
        return;
      }

      if (!isDeleting) {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1));
          index++;
        } else {
          isDeleting = true;
          pauseCounter = 20; // Pause for 2 seconds before deleting
        }
      } else {
        if (index > 0) {
          setDisplayText(fullText.slice(0, index - 1));
          index--;
        } else {
          isDeleting = false;
          pauseCounter = 10; // Short pause before retyping
        }
      }
    }, 100); // Typing speed

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Vishwa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {displayText.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < displayText.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
