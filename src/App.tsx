import welcomeGraphic from './assets/images/welcome-graphic.png';
import nftGraphic from './assets/images/NFT.png';
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

import { useState } from 'react';
import GalleryIndicator from './components/icons/GalleryIndicator';
import TntLogo from './components/icons/TntLogo';
import EarlyAccessForm from './components/EarlyAccessForm';

import pfp1 from './assets/images/gallery-pfp/AC375921867.jpg';
import pfp2 from './assets/images/gallery-pfp/AK986665260.jpg';
import pfp3 from './assets/images/gallery-pfp/AP658101057.jpg';
import pfp4 from './assets/images/gallery-pfp/BG499717119.jpg';
import pfp5 from './assets/images/gallery-pfp/FS898028791.jpg';
import LinkIcon from './components/icons/LinkIcon';
import ExternalLink from './components/ExternalLink';
// HS756967821
// JC244552313
// KC123335648
// KK068123852
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

function App() {
  const [selectedImage, selectImage] = useState(0);
  const [tntLogo, setTntLogo] = useState(tntLogoWhite);


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

  return (
    <div className="App">
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
      </motion.div>
      <section id="welcome">
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
        <motion.div className="geonodes-content">
          <img src={logoLarge} className="geonodes-logo" />
          <motion.div
            className='geonodes-title'
            whileInView="hover"
            viewport={{ once: true }}
            // whileInView='hover'
            style={{
              opacity: 0,
              // position: 'absolute',
            }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            variants={{
              hover: {
                opacity: 1,
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

      <section className="collection">
        <h3>teonite pfp</h3>
        <p>
          teonite is a deep tech studio and used geonodes.xyz platform to render and mint a custom PFP NFT for each employee.
        </p>
        <Carousel
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

      {/* <section className="collection odd">
          
      </section> */}

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
            {/* <TntLogo /> */}
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
