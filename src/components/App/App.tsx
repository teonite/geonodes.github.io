import './style.scss';

import { motion } from 'framer-motion';
import { MouseEventHandler, useEffect } from 'react';
import ReactPlayer from 'react-player';

import geonodeGraphic from '../../assets/images/geonodes.svg';
import logoLarge from '../../assets/images/logo-large.svg';
import nftGraphic from '../../assets/images/NFT.svg';
import { EarlyAccessForm } from '../../shared/components/layout/EarlyAccessForm';
import { Footer } from '../../shared/components/layout/Footer/Footer';
import { SideNavigation } from '../../shared/components/layout/SideNavigation/SideNavigation';
import { Header } from '../../shared/components/layout/Header/Header';
import { PfpSection } from './components/PfpSection';
import { ThxSection } from './components/ThxSection/ThxSection';

export const App = () => {
  const onClick = () => {
    const modal = document.querySelector('.early-access-modal');
    if (!modal) return;
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
    }
  };

  const closeModal: MouseEventHandler<HTMLDivElement> = (event) => {
    const modal = document.querySelector('.early-access-modal');
    if (!modal) return;

    const target = event.target;

    if (target instanceof HTMLElement) {
      if (
        !target.classList.contains('hidden') &&
        target.classList.contains('early-access-modal')
      ) {
        target.classList.add('hidden');
      }
    }
  };


  return (
    <div id="app">
      <Header />
      <section id="welcome">
        <div className="welcome-container">
          <div className="welcome-content">
            <h3>
              generative, <br />
              animated, <br />
              three dimensional
            </h3>
            <p>
              geonodes.xyz is a platform that enables artists (using blender geometry
              nodes) to deliver <span className="bold">generative animated 3D NFT</span>s
              and/or <span className="bold">movies</span> at scale. Using our technology
              each geonode is unique, based on a{' '}
              <span className="bold">generated seed</span> and{' '}
              <span className="bold">attributes</span> defined by the artist the platform
              can render thousands of movies or mint thousands of NFTs (with rendered
              movies automatically) from one blender project.
            </p>
            <p>
              Currently geonodes.xyz is in an alpha state. If you&apos;re interested
              please sign up for early access.
            </p>
            <div className="action-button-container">
              <button className="action-button" onClick={onClick}>
                Early access
              </button>
            </div>
          </div>
          <ReactPlayer
            id="geo-head"
            url="videos/geo-head/master.m3u8"
            playing={true}
            loop
            muted
            controls={false}
            width="100%"
            height="auto"
          />
        </div>
      </section>

      <section id="geonodes">
        <img src={nftGraphic} />
        <motion.div className="geonodes-content" whileInView="hover">
          <div className="geonodes-logo-container">
            <img src={logoLarge} className="geonodes-logo" />
          </div>
          <motion.div
            className="geonodes-title"
            whileInView="hover"
            // viewport={{ once: true }}
            style={{
              bottom: -200,
              // opacity: 0,
              // position: 'absolute',
            }}
            transition={{
              duration: 0.6,
              // delay: 0.7,
            }}
            variants={{
              hover: {
                bottom: -270,
              },
            }}
          >
            <motion.img src={geonodeGraphic} className="geonodes-graphic" />
          </motion.div>
        </motion.div>
      </section>
      <PfpSection />
      <ThxSection odd />
      <div className="early-access-modal hidden" onClick={closeModal}>
        <div className="early-access-modal-content">
          <EarlyAccessForm />
        </div>
      </div>
      <Footer />
      <SideNavigation sections={['welcome', 'geonodes', 'collection-pfp', 'thx-nodes']} />
    </div>
  );
};
