import React from 'react';
import { styles } from '../styles';

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} py-8 bg-primary`}>
      <div className='max-w-7xl mx-auto text-center'>
        <p className='text-secondary text-[14px]'>
          © 2025 Vishwa S Chandrasekara | Portfolio Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;