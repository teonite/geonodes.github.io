import './style.scss';

import { motion } from 'framer-motion';
import { animate } from 'motion';
import { useEffect } from 'react';
import geonodeGraphic from '../../../../assets/images/geonodes.svg';
import logo from '../../../../assets/images/logo.svg';

export const Header = () =>{
    useEffect(() => {
        document.querySelector('.geonodes-logo')?.addEventListener('mouseenter', () => {
          animate('.geonodes-logo-graphic', { x: 130 }, { duration: 0.5 });
        });
    
        document.querySelector('.geonodes-logo')?.addEventListener('mouseleave', () => {
          animate('.geonodes-logo-graphic', { x: 0 }, { duration: 0.5 });
        });
      }, []);
    return (
        <motion.div id="header" whileHover="hover">
        <img
          src={logo}
          alt="geonodes.xyz logo"
          className="geonodes-logo"
          style={{ backgroundColor: 'white', zIndex: 100 }}
        />
        <motion.img
          style={{
            marginLeft: -120,
          }}
          variants={{}}
          src={geonodeGraphic}
          className="geonodes-logo-graphic"
        />
      </motion.div>
    )
}