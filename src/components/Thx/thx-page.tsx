import { Header } from '../../shared/components/layout/Header/Header';
import { GeonodesSection } from '../../shared/components/layout/GeonodesSection/GeonodesSection';
import {ChangeEvent, MouseEventHandler, useState, useEffect} from 'react';
import {WalletInputArrow} from '../../components/icons/WalletInputArrow'
import { Footer } from '../../shared/components/layout/Footer/Footer';
import { ShareModal } from '../../shared/components/layout/SharedModal/ShareModal'
import { ThxNodePanel } from '../../shared/components/layout/ThxNodePanel/ThxNodePanel'
import { Link, useParams } from "react-router-dom";
import { abi } from "../../../contract-cache.json" 
import { useContract } from "@thirdweb-dev/react";
import { server, routes }   from "../../../backend-config.json"
import { CONTRACT_ADDRESS } from "../../../nft-config.json"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import './style.scss';


interface ClientPageInfo {
    hash: string;
    name: string;
    token_id: number;
}

export const ThxPage = () => {
    
    /** Sending url to backend to validate */
    const params = useParams()
    let {hash} = params 
    const [validatedInfo, setValidatedInfo] = useState<boolean | ClientPageInfo>()
    useEffect(() => {
        fetch(`${server}${routes.link_validation}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ hash }),
        })
          .then((res) => res.json())
          .then((data) => setValidatedInfo(data))
          .catch((error) => {
            console.error('Error fetching data:', error);
            setValidatedInfo(false);
          });
      }, [hash]);
    
    const { contract } = useContract(CONTRACT_ADDRESS, abi);
    const address = useAddress();

    const [claimInfo, setClaimInfo] = useState("")

    const submitHandler = async (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        try {
            const response = await fetch(`${server}${routes.claim}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ address, hash }),
            });
        
            if (!response.ok) {
              setClaimInfo('Error: Try again after a few seconds.')
              throw new Error('Request failed with status ' + response.status);
            }
            setClaimInfo('Claim succeded!')
          } catch (error) {
            console.error('Error fetching data:', error);
            setClaimInfo('Error: Try again after a few seconds.')
          }
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

    if(typeof validatedInfo == 'boolean' || validatedInfo == undefined) {
        return (<> No Access </>)
    }

    return (
        <div>
            <Header shareButton={true}/> 
            <section id="welcome">
                <div className="welcome-container">
                    <div className="welcome-content">
                        <h3>thank you {validatedInfo.name} <span style={{color: '#00EECC'}}>!</span>{' '}</h3>
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
                                { !address ? <ConnectWallet className="connectButton" /> : <div className="connectButton-connected"> {address} </div>}
                                <div className='submit' onClick={submitHandler}>
                                    <WalletInputArrow textColor={"#FFFF"}/>
                                </div>
                            </div> 
                            {claimInfo}

                        </div>
                        <p>If you're new to Web3, please visit our <Link to="/crashcourse" state={{ from: `/thx/${hash}` }}>crash course</Link>.</p>
                        <p>
                            If you have any questions or need assistance, please contact 
                            Mike at <a href="<--mail link-->">mike@teonite.com </a>
                        </p>
                    </div>
                    <ThxNodePanel nodeId={validatedInfo.token_id} showInfo={true} playOnHover={false} contract={contract}/>
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
