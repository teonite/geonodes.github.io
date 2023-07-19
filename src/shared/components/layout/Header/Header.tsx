import './style.scss';

import { motion } from 'framer-motion';
import { animate } from 'motion';
import { useEffect } from 'react';
import geonodeGraphic from '../../../../assets/images/geonodes.svg';
import logo from '../../../../assets/images/logo.svg';
import {ShareIcon} from '../../../../components/icons/ShareIcon'

interface headerConfig {
  shareButton: boolean;
}

export const Header = (config: headerConfig) =>{
    useEffect(() => {
        document.querySelector('.geonodes-logo')?.addEventListener('mouseenter', () => {
          animate('.geonodes-logo-graphic', { x: 130 }, { duration: 0.5 });
        });
    
        document.querySelector('.geonodes-logo')?.addEventListener('mouseleave', () => {
          animate('.geonodes-logo-graphic', { x: 0 }, { duration: 0.5 });
        });
      }, []);
    
    let shareButton = config.shareButton? <ShareButton /> : null
    return (
      <div className='header-container'>
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
        {shareButton}
      </div>
    )
}


const ShareButton = () => {

  const onClick = () => {
    const modal = document.querySelector('.share-modal ');
    if (!modal) return;
    console.log('jl')

    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
    }
  };

  return(
    <div className='share-button-container' onClick={onClick}>
      <div className='share-button'>
        share
        <ShareIcon />
      </div>
    </div>
  )
}