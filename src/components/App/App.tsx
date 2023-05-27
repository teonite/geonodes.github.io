import './style.scss';

import { motion } from 'framer-motion';
import { animate } from 'motion';
import { MouseEventHandler, useEffect } from 'react';

import geonodeGraphic from '../../assets/images/geonodes.svg';
import logo from '../../assets/images/logo.svg';
import logoLarge from '../../assets/images/logo-large.svg';
import nftGraphic from '../../assets/images/NFT.svg';
import welcomeGraphic from '../../assets/images/welcome-graphic.png';
import { EarlyAccessForm } from '../../shared/components/layout/EarlyAccessForm';
import { Footer } from '../../shared/components/layout/Footer/Footer';
import { PfpSection } from './components/PfpSection';
import { initAppScrolling } from './utils/initAppScrolling';

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

  useEffect(() => {
    initAppScrolling();
    animateLogo();
  }, []);

  const animateLogo = () => {
    document.querySelector('.geonodes-logo')?.addEventListener('mouseenter', () => {
      animate('.geonodes-logo-graphic', { x: 130 }, { duration: 0.5 });
    });

    document.querySelector('.geonodes-logo')?.addEventListener('mouseleave', () => {
      animate('.geonodes-logo-graphic', { x: 0 }, { duration: 0.5 });
    });
  };

  return (
    <div className="app">
      <div className="slider-overlay" />
      <div className="navigation-slider">
        <div id="slider-welcome" className="navigation-slider-item">
          <div
            className="item-container"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            <div className="navigation-slider-item-inner" />
            <div id="progress-welcome" className="navigation-slider-item-progress" />
          </div>
        </div>
        <div id="slider-geonodes" className="navigation-slider-item">
          <div
            className="item-container"
            onClick={() => {
              const geonodesElement = document.getElementById('geonodes');
              if (geonodesElement) {
                window.scrollTo({
                  top: geonodesElement.offsetTop + 100,
                  behavior: 'smooth',
                });
              }
            }}
          >
            <div className="navigation-slider-item-inner" />
            <div id="progress-geonodes" className="navigation-slider-item-progress" />
          </div>
        </div>
        <div id="slider-collection-pfp" className="navigation-slider-item">
          <div
            className="item-container"
            onClick={() => {
              window.scrollTo({
                top: document.getElementById('collection-pfp')?.offsetTop,
                behavior: 'smooth',
              });
            }}
          >
            <div className="navigation-slider-item-inner" />
            <div
              id="progress-collection-pfp"
              className="navigation-slider-item-progress"
            />
          </div>
        </div>
        {/*

        <div
          id='slider-collection-thxnodes'
          className='navigation-slider-item'
        >
          <div
            className='item-container'
            onClick={() => {
              window.scrollTo({
                top: document.getElementById('collection-thxnodes')?.offsetTop,
                behavior: 'smooth',
              });
            }}
          >
            <div className='navigation-slider-item-inner'/>
            <div id='progress-collection-thxnodes' className='navigation-slider-item-progress' />
          </div>
        </div>
        */}
        {/* <div className='navigation-slider-item selected' />
        <div className='navigation-slider-item' /> */}
      </div>

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

      <section id="welcome">
        {/* <motion.div
        id="header"
        whileHover='hover'
      >
        <img src={logo} alt="geonodes.xyz logo" className='geonodes-logo' style={{ backgroundColor: 'white', zIndex: 100 }} />
        <motion.img
          style={{
            marginLeft: -120,
            left: 0,
            position: 'absolute',
          }}
          variants={{
            hover: {
              left: 250,
              transition: {
                type: 'spring',
                duration: 0.8,
              },
            },
          }}
          src={geonodeGraphic}
          className="geonodes-logo-graphic"
        />
      </motion.div> */}
        <div className="welcome-container">
          <div className="welcome-graphic">
            <img src={welcomeGraphic} />
          </div>
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

      {/*
      <section id='collection-thxnodes' className="collection collection-odd">
        <h3>teonite thxnodes</h3>
        <p>
          teonite made also a collection for its select clients, as sign of great collaboration and highest value.
        </p>
        <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          selectedItem={selectedGeonode}
          onChange={(index) => {
            selectGeonode(index);
          }}
        >
          {thxGeonodesVideoUrls.map(({ video }, index) => {
            return (
              <div key={index} className="collection-image">
                <ReactPlayer
                  className='video-player'
                  url={video}
                  height='100%'
                  width='100%'
                  controls={false}
                  playing={index === selectedGeonode}
                  muted={true}
                  loop
                  playsinline
                />
              </div>
            );
          })}
        </Carousel>
        <div className='gallery-link'>
          <ExternalLink
            odd
            Icon={LinkIcon}
            url="https://opensea.io/collection/teonite-geonodes"
            text="view full collection on opensea.io"
          />
        </div>
        <div className='gallery-indicators'>
          {thxGeonodesVideoUrls.map((_, index) => {
            const isSelected = index === selectedGeonode;
            return (
              <div key={index} onClick={() => selectGeonode(index)}>
                <GalleryIndicator color={isSelected ? '#00EECC' : '#000'} />
              </div>
            );
          })}
        </div>
      </section>
        */}
      <PfpSection />

      <div className="early-access-modal hidden" onClick={closeModal}>
        <div className="early-access-modal-content">
          <EarlyAccessForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};
