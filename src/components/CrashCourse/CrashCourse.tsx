import { Header } from '../../shared/components/layout/Header/Header';
import { Footer } from '../../shared/components/layout/Footer/Footer';
import {MouseEventHandler} from 'react';
import {BackArrow} from '../../components/icons/BackArrow'
import { ShareModal } from '../../shared/components/layout/SharedModal/ShareModal'
import { Link, useLocation } from "react-router-dom";

import './style.scss';

export const CrashCourse = () => {
    const location = useLocation()
    const { from } = location.state
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
            <section id="welcome-course">
                <div className="welcome-container">
                    <div className="welcome-content">
                        <h3>web3 crash course</h3>
                        <p>
                        To claim your NFT (non-fungible token), you will need an Ethereum wallet. 
                        This wallet consists of two long hashes: <span className="bold">a public address </span>
                        (which can be safely shared) and a <span className="bold">private key</span> (which 
                        ensures that only you have access). This pair can be generated and used for various 
                        actions on the Ethereum blockchain, including storing 
                        cryptocurrencies, buying/selling tokens, and sending/receiving tokens. The easiest 
                        way to generate this hash pair is by using crypto wallets, also known as cryptocurrency 
                        wallets.
                        </p>
                        <p>
                        While we recommend using a hardware wallet, which securely stores the private key 
                        within a dedicated device, you can start with <span className="bold">free software alternatives.</span>
                        </p>
                        <div className="wallets-container">
                            <div className="wallet">
                                software wallet: <br></br>
                                <button className="action-button">metamask</button>
                            </div>
                            <div className="wallet">
                                hardware wallet:<br></br>
                                <button className="action-button">trezor</button>
                            </div>
                        </div>
                        <p>
                            If you want to learn more we recommend starting with this article and decrypt platform in general 
                            great source of web3 related knowledge:
                            <a href='https://decrypt.co/resources/non-fungible-tokens-nfts-explained-guide-learn-blockchain'> 
                            https://decrypt.co/resources/non-fungible-tokens-nfts-explained-guide-learn-blockchain</a>
                        </p>
                        <p>
                            If you have any questions or need assistance, please contact Mike at <a href="<--mail link-->">mike@teonite.com </a>
                        </p>
                    </div>
                </div>
                <div className="back-button-container">
                    <Link to={`${from}`}><button className="back-button"> <BackArrow /> back to NFT</button></Link>
                </div>
            </section>
            <div className="share-modal hidden" onClick={closeModal}>
                <div className="share-modal-content">
                    <ShareModal />
                </div>
            </div>
            <Footer />
        </div>
    )
}
