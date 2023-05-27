import geonodeGraphic from '@assets/images/geonodes.svg';
import logo from '@assets/images/logo.svg';
import tntLogoBlack from '@assets/images/tnt-logo-black.svg';
import tntLogoWhite from '@assets/images/tnt-logo-white.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { TntLogo } from '../../../../components/icons/TntLogo';

export const Footer = () => {
  const [tntLogo, setTntLogo] = useState(tntLogoWhite);
  return (
    <footer>
      <motion.div
        className="footer-logo"
        whileHover="hover"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <img src={logo} className="footer-logo-geonodes" alt="geonodes.xyz logo" />
        <img src={geonodeGraphic} className="geonodes-graphic" />
      </motion.div>
      <div className="footer-teonite">
        <motion.a href="https://teonite.com" target="_blank">
          <motion.img
            src={tntLogo}
            onMouseEnter={() => setTntLogo(tntLogoBlack)}
            onMouseLeave={() => setTntLogo(tntLogoWhite)}
            alt="Teonite logo"
          />
        </motion.a>
      </div>
      <div className="footer-teonite-mobile">
        <a href="https://teonite.com" target="_blank" rel="noreferrer">
          <TntLogo textColor="#fff" />
        </a>
      </div>
    </footer>
  );
};
