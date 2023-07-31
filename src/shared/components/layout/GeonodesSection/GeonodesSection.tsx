import { motion } from 'framer-motion';
import logoLarge from '../../../../assets/images/logo-large.svg';
import nftGraphic from '../../../../assets/images/NFT.svg';
import geonodeGraphic from '../../../../assets/images/geonodes.svg';
import './style.scss';

export const GeonodesSection = () => {
    return (
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
    )   
}