import { Header } from '../../shared/components/layout/Header/Header';
import { Footer } from '../../shared/components/layout/Footer/Footer';
import { ShareModal } from '../../shared/components/layout/SharedModal/ShareModal'
import {MouseEventHandler} from 'react';
import { ThxNodePanel } from '../../shared/components/layout/ThxNodePanel/ThxNodePanel'
import { NodeInfo } from '../../shared/components/layout/NodeInfo/NodeInfo';
import physicalArtImg from '../../assets/images/thx-node-physical.png'
import {Arrow1, Arrow2, Arrow3} from '../../components/icons/Arrows'
import { GeonodesSection } from '../../shared/components/layout/GeonodesSection/GeonodesSection';
import { NodesCarousel } from './NodesCarousel';

import './style.scss'

export const THXCollection = () => {
    const closeModal: MouseEventHandler<HTMLDivElement> = (event) => {
        const modal = document.querySelector('.share-modal');
        if (!modal) return;
    
        const target = event.target;
    
        if (target instanceof HTMLElement) {
          if (
            !target.classList.contains('hidden') &&
            target.classList.contains('share-modal')
          ) {
            target.classList.add('hidden');
          }
        }
    }; 
    return (
        <div>
            <Header shareButton={true}/> 
            <section id="welcome">
                <div className="welcome-container">
                    <div className="welcome-content">
                        <h3>T.H.X. collection</h3>
                        <p>
                            At <span className="bold">teonite</span>, we are always thankful for opportunity that our 
                            clients bring. Their trust and partnership have been instrumental 
                            in our success.
                        </p>
                        <p>
                            As a token of our appreciation, we have prepared a special gift 
                            for them. We always thrive on the synergies between <span className="bold">art and tech</span>{' '}
                            so we prepared an exclusive digital token that is accompanied 
                            with physical canvas.
                        </p>   
                        <p>          
                            In order to pull this off, we&apos;ve used <span className="bold">genodes.xyz</span> platform to deliver 
                            a set of customised and generated attributes, that serve as a basis 
                            for individually crafted video and a real canvas.
                        </p>
                        <h2>anatomy of a token</h2>
                        <p>
                            thx-nodes consists of ten unique diptychs, each comprising a digital and physical part and 500 
                            digital only videos, minted by community. The physical canvas was sent by mail, while the 
                            videos were minted as an NFT and transferred to a crypto wallet.
                        </p>
                    </div>
                    <div className="art-showcase-container">
                        <div className="left-panel">
                            <div className="top-panel">
                                <div className="nft"><ThxNodePanel id={1} showInfo={false}/></div>
                                <div className="arrows-panel">
                                    <div id="top-arrow">
                                        <div className='text'>physical</div>
                                        <Arrow2/> 
                                    </div>
                                    <div id="bottom-arrow">
                                        <Arrow3/>
                                        <div className='text'>digital</div> 
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-panel">
                                <div className='node-info'><NodeInfo selected={0} /> </div>
                                <div className='description'>
                                    <Arrow1 />
                                    <div className='description-text'>
                                        title with initials is a random value seed. Attributes are visually manifested and 
                                        intricately linked to the characteristics of our partners. Certain attributes are easily 
                                        identifiable, like their company's brand color, while others may be more obscure. 
                                        Additionally, a few attributes are entirely random.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="physical-art-showcase">{<img src={physicalArtImg}/>}</div>
                    </div>
                </div>
            </section>
            <GeonodesSection />
            <NodesCarousel />
            <div className="share-modal hidden" onClick={closeModal}>
                <div className="share-modal-content">
                    <ShareModal />
                </div>
            </div>
            <Footer />
        </div>
    )
} 