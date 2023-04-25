import welcomeGraphic from './assets/images/welcome-graphic.png';
import nftGraphic from './assets/images/NFT.svg';
import logoLarge from './assets/images/logo-large.svg';
import logo from './assets/images/logo.svg';
import geonodeGraphic from './assets/images/geonodes.svg';
import tntLogoWhite from './assets/images/tnt-logo-white.svg';
import tntLogoBlack from './assets/images/tnt-logo-black.svg';
import './App.css'
import './styles/index.scss';

import { motion } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useEffect, useState } from 'react';
import GalleryIndicator from './components/icons/GalleryIndicator';
import TntLogo from './components/icons/TntLogo';
import EarlyAccessForm from './components/EarlyAccessForm';

import { animate, scroll, inView, ScrollOffset } from "motion";

import pfp1 from './assets/images/gallery-pfp/AC375921867.jpg';
import pfp2 from './assets/images/gallery-pfp/AK986665260.jpg';
import pfp3 from './assets/images/gallery-pfp/AP658101057.jpg';
import pfp4 from './assets/images/gallery-pfp/BG499717119.jpg';
import pfp5 from './assets/images/gallery-pfp/FS898028791.jpg';
import LinkIcon from './components/icons/LinkIcon';
import ExternalLink from './components/ExternalLink';

import pfp6 from './assets/images/gallery-pfp/HS756967821.jpg';
import pfp7 from './assets/images/gallery-pfp/JC244552313.jpg';
import pfp8 from './assets/images/gallery-pfp/KC123335648.jpg';
import pfp9 from './assets/images/gallery-pfp/KK068123852.jpg';
import pfp10 from './assets/images/gallery-pfp/MC631701771.jpg';

// MC631701771
// MG019297983
// MS704044284
// MS906834887
// MW848845418
// NB716041689
// RO134319190
// SW924715906
// TT000000000

const pfpImages = [
  pfp1, pfp2, pfp3, pfp4, pfp5,
];

const thxnodeImages = [
  pfp6, pfp7, pfp8, pfp9, pfp10,
];

function App() {
  const [selectedImage, selectImage] = useState(0);
  const [selectedGeonode, selectGeonode] = useState(0);
  const [tntLogo, setTntLogo] = useState(tntLogoWhite);

  useEffect(() => {
    const item = document.getElementById("welcome");
    const item2 = document.getElementById("geonodes");
    const item3 = document.getElementById("collection-pfp");
    const item4 = document.getElementById("collection-thxnodes");
  
    const progressWelcome = document.getElementById("progress-welcome");
    const progressGeonodes = document.getElementById("progress-geonodes");
    const progressCollectionPfp = document.getElementById("progress-collection-pfp");
    const progressCollectionThxnodes = document.getElementById("progress-collection-thxnodes");

    if (
      !item ||
      !item2 ||
      !item3 ||
      !item4 ||
      !progressWelcome ||
      !progressGeonodes ||
      !progressCollectionPfp ||
      !progressCollectionThxnodes
    ) return;

    scroll(({ y }) => {
      // if (y.current < y.targetOffset || y.current + 1 > y.targetLength + y.targetOffset) {
      if (y.current + 164 < y.targetOffset || y.current +1 > y.targetLength + y.targetOffset) {
        progressWelcome.style.height = "0px"
      } else {
        progressWelcome.style.height = "56px"
      }

    }, {
      target: item
    });

    scroll(({ y }) => {
      if (y.current < y.targetOffset || y.current +1 >= y.targetLength + y.targetOffset) {
      // if (y.current + 1 < y.targetOffset || y.current +1 > y.containerLength + y.targetOffset) {
        progressGeonodes.style.height = "0px"
      } else {
        progressGeonodes.style.height = "56px"
      }
    }, {
      target: item2
    });

    scroll(({ y }) => {
      if (y.current + 1 <= y.targetOffset || y.current > y.containerLength + y.targetOffset) {
        progressCollectionPfp.style.height = "0px"
      } else {
        progressCollectionPfp.style.height = "56px"
      }
    }, {
      target: item3,
    });

    scroll(({ y }) => {
      if (y.current + 1 <= y.targetOffset || y.current > y.containerLength + y.targetOffset) {
        progressCollectionThxnodes.style.height = "0px"
      } else {
        progressCollectionThxnodes.style.height = "56px"
      }
    }, {
      target: item4,
    });
  
  }, []);


  const onClick = () => {
    const modal = document.querySelector('.early-access-modal');
    if (!modal) return;
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
    }
  };

  const closeModal = (event: any) => {
    const modal = document.querySelector('.early-access-modal');
    if (!modal) return;

    if (event.target.className === 'early-access-modal') {
      modal.classList.add('hidden');
    }
  };

  const handleMouseEnter = () => {
    const overlay = document.querySelector('.slider-overlay');
    if (!overlay) return;

    overlay.classList.add('slider-overlay-visible');
  };

  const handleMouseLeave = () => {
    const overlay = document.querySelector('.slider-overlay');
    if (!overlay) return;

    overlay.classList.remove('slider-overlay-visible');
  };

  return (
    <div className="App">
      <div className='slider-overlay' />
      <div className='navigation-slider'>
        <div
          id='slider-welcome'
          className='navigation-slider-item'  
        >
          <div
            className='item-container'
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            <div className='navigation-slider-item-inner'/>
            <div id='progress-welcome' className='navigation-slider-item-progress' />
          </div>
          {/* <div className='navigation-slider-item-title'>
            <span>about</span>
          </div> */}
        </div>
        <div
          id='slider-geonodes'
          className='navigation-slider-item'
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          // onClick={() => {
          //   document.querySelector('#geonodes')?.scrollIntoView({ behavior: 'smooth' });
          // }}
        >
          <div
            className='item-container'
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            onClick={() => {
              window.scrollTo({
                top: document.getElementById('geonodes')!.offsetTop + 100,
                behavior: 'smooth',
              });
              // document.querySelector('#geonodes')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className='navigation-slider-item-inner'/>
            <div id='progress-geonodes' className='navigation-slider-item-progress' />
          </div>
          {/* <div className='navigation-slider-item-inner' />
          <div className='navigation-slider-item-progress' /> */}
          {/* <div className='navigation-slider-item-title'>
            <span>geonodes</span>
          </div> */}
        </div>
        <div
          id='slider-collection-pfp'
          className='navigation-slider-item'
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          // onClick={() => {
          //   document.querySelector('#collection-pfp')?.scrollIntoView({ behavior: 'smooth' });
          // }}
        >
          <div
            className='item-container'
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            onClick={() => {
              // document.querySelector('#collection-pfp')?.scrollIntoView({ behavior: 'smooth' });
              window.scrollTo({
                top: document.getElementById('collection-pfp')?.offsetTop,
                behavior: 'smooth',
              });
            }}
          >
            <div className='navigation-slider-item-inner'/>
            <div id='progress-collection-pfp' className='navigation-slider-item-progress' />
          </div>
          {/* <div className='navigation-slider-item-inner' />
          <div className='navigation-slider-item-progress' /> */}
          {/* <div className='navigation-slider-item-title'>
            <span>teonite pfp</span>
          </div> */}
        </div>

        <div
          id='slider-collection-thxnodes'
          className='navigation-slider-item'
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          // onClick={() => {
          //   document.querySelector('#collection-pfp')?.scrollIntoView({ behavior: 'smooth' });
          // }}
        >
          <div
            className='item-container'
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
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

        {/* <div className='navigation-slider-item selected' />
        <div className='navigation-slider-item' /> */}
      </div>

      <motion.div
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
              left: 300,
              transition: {
                type: 'spring',
                duration: 0.8,
              },
            },
          }}
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
              generative, <br/>
              animated, <br/>
              three
              dimensional
            </h3>
            <p>
              geonodes.xyz is a curated platform for fully generative animated 3D nfts made in blender using geometry nodes. Each geonode is unique, based on a generated seed and attributes defined by artist. rendered on the  platform and minted for <span className='bold'>you.</span>
            </p>
            <p>
              Currently <span className='bold'>geonodes.xyz</span> is in alpha state. if you’re interested please sign up for early access.
            </p>
            <div className='action-button-container'>
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
          <div className='geonodes-logo-container'>
            <img src={logoLarge} className="geonodes-logo" />
          </div>
          <motion.div
            className='geonodes-title'
            whileInView="hover"
            // viewport={{ once: true }}
            style={{
              bottom: -200
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
                // opacity: 1,
              },
            }}
            // initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
          >
            <motion.img src={geonodeGraphic} className="geonodes-graphic" />
          </motion.div>
        </motion.div>
        {/* <motion.div
            className='geonodes-title'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={geonodeGraphic} />
          </motion.div> */}
      </section>

      <section id='collection-pfp' className="collection">
        <h3>teonite pfp</h3>
        <p>
          teonite is a deep tech studio and used geonodes.xyz platform to render and mint a custom PFP NFT for each employee.
        </p>
        <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          selectedItem={selectedImage}
          onChange={(index) => {
            selectImage(index);
          }}
        >
          {pfpImages.map((item, index) => {
            return (
              <div key={index} className="collection-image">
                <img src={item} />
              </div>
            );
          })}
      </Carousel>
      <div className='gallery-link'>
        <ExternalLink
          Icon={LinkIcon}
          url="https://opensea.io/collection/teonite-geonodes"
          text="view full collection on opensea.io"
        />
      </div>
      <div className='gallery-indicators'>
        {pfpImages.map((_, index) => {
          const isSelected = index === selectedImage;
          return (
            <div key={index} onClick={() => selectImage(index)}>
              <GalleryIndicator color={isSelected ? '#00EECC' : '#fff'} />
            </div>
          );
        })}
      </div>
      </section>

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
          {thxnodeImages.map((item, index) => {
            return (
              <div key={index} className="collection-image">
                <img src={item} />
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
          {thxnodeImages.map((_, index) => {
            const isSelected = index === selectedGeonode;
            return (
              <div key={index} onClick={() => selectGeonode(index)}>
                <GalleryIndicator color={isSelected ? '#00EECC' : '#000'} />
              </div>
            );
          })}
        </div>  
      </section>

      <footer>
        <motion.div
          className='footer-logo'
          whileHover='hover'
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <img src={logo} className="footer-logo-geonodes" alt="geonodes.xyz logo"/>
          <img src={geonodeGraphic} className="geonodes-graphic" />
        </motion.div>
        <div className='footer-teonite'>
          <motion.a href="https://teonite.com" target="_blank">
            <motion.img
              src={tntLogo}
              onMouseEnter={() => setTntLogo(tntLogoBlack)}
              onMouseLeave={() => setTntLogo(tntLogoWhite)}
              alt="Teonite logo"
            />
          </motion.a>
        </div>
        <div className='footer-teonite-mobile'>
          <a href="https://teonite.com" target="_blank">
            <TntLogo textColor='#fff' />
          </a>
        </div>
      </footer>

      <div className='early-access-modal hidden' onClick={closeModal}>
        <div className='early-access-modal-content'>
          <EarlyAccessForm />
        </div>
      </div>

    </div>
  )
}

export default App
