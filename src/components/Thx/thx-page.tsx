import { Header } from '../../shared/components/layout/Header/Header';
import { GeonodesSection } from '../../shared/components/layout/GeonodesSection/GeonodesSection';
import {ChangeEvent, MouseEventHandler, useState} from 'react';
import {WalletInputArrow} from '../../components/icons/WalletInputArrow'
import { Footer } from '../../shared/components/layout/Footer/Footer';
import { ShareModal } from '../../shared/components/layout/SharedModal/ShareModal'
import { ThxNodePanel } from '../../shared/components/layout/ThxNodePanel/ThxNodePanel'

import './style.scss';

interface ThxPageClient {
    name: string;
    nodeId: number;
}

export const ThxPage = (client: ThxPageClient) => {
    const [address, setAddress] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.currentTarget.value);
      };

    const submitHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        console.log(address)
        // *ToDOhandle submitting address
    };

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

    const NODE_ID = client.nodeId
    const CLIENT_NAME = client.name
    return (
        <div>
            <Header shareButton={true}/> 
            <section id="welcome">
                <div className="welcome-container">
                    <div className="welcome-content">
                        <h3>thank you {CLIENT_NAME} <span style={{color: '#00EECC'}}>!</span>{' '}</h3>
                        <p>
                            Your trust and partnership have been instrumental in our 
                            success. As a token of our appreciation, we have prepared 
                            a special gift for you — an exclusive video crafted with 
                            you in mind. This is a digital token that accompanies 
                            physical canvas you&apos;ve already have.
                        </p>
                        <p>
                            To <span className="bold">claim it</span>, please provide 
                            us with your ETH wallet address below. We will notify you 
                            once it is done:
                        </p>
                        <div>
                            <div className='wallet-input-container'>
                                <input placeholder="pass your wallet address here" type="text" onChange={handleChange}/>
                                <div className='submit' onClick={submitHandler}>
                                    <WalletInputArrow textColor={"#FFFF"}/>
                                </div>
                            </div> 
                        </div>
                        <p>If you're new to Web3, please visit our <a href="<--crash course link-->">crash course</a>.</p>
                        <p>
                            If you have any questions or need assistance, please contact 
                            Mike at <a href="<--mail link-->">mike@teonite.com </a>
                        </p>
                    </div>
                    <ThxNodePanel id={NODE_ID} showInfo={true}/>
                </div>
            </section>
            <GeonodesSection/>
            <section id="creationProcess">
                <h3>Creation Process</h3>
                <p>
                    We harnessed the power of the geonodes.xyz platform to create bespoke 
                    collection of nfts for our most esteemed clients, creating artifacts 
                    that reflects our remarkable partnership and unparalleled value.
                </p>
                <p>
                    <span className="bold">geonodes.xyz</span>{' '}is a platform that empowers artists to deliver generative 
                    animated 3D NFTs and/or movies on a large scale.
                    <br></br> 
                    1. The artist prepares a file in 3D software, defining the art style 
                    and individual artistic content.
                    <br></br> 
                    2. They also define attributes that can serve as unique properties 
                    of the generated artwork, including color changes, 3D objects, animation 
                    features, materials, and much more.
                    <br></br> 
                    3. This file is then connected to our proprietary software, which generates 
                    and renders the defined scope of videos. These are subsequently minted into 
                    tokens onto the blockchain through our smart contracts.
                </p>
            </section>
            <div className="share-modal hidden" onClick={closeModal}>
                <div className="share-modal-content">
                    <ShareModal />
                </div>
            </div>
            <Footer/>
        </div>
    )
}
