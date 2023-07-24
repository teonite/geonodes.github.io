import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react'
import { useContractRead, useContract, SmartContract  } from "@thirdweb-dev/react";
import config from '../../../../../nft-config.json';
import './style.scss'
interface nodeProps{
    nodeId: number;
    showInfo: boolean
    playOnHover: boolean
    contract: SmartContract | undefined
}

interface attribute{
    trait_type: string
    value: string | number
}

interface attributes{
    NAME: string
    ATTRIBUTE_1: attribute
    ATTRIBUTE_2: attribute
    ATTRIBUTE_3: attribute
}


const findByTraitType= (set: attribute[], traitType: string): attribute => {
    for(let i =0; i < set.length; i++) {
      if (set[i].trait_type === traitType) return set[i];
    }
    return {
      trait_type: 'Null',
      value: 'undefined'
    }
}


export const ThxNodePanel = (props: nodeProps) =>{
    const {showInfo} = props;
    
    const [metadata, setMetadata] = useState('');
    const [videoSrc, setVideoSrc] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [attributes, setAttributes] = useState<attributes>();
    const { data, isLoading } = useContractRead(props.contract, "tokenURI", [props.nodeId])

    useEffect(() => {
        if (!isLoading && data) {
            setMetadata(`https://ipfs.io/ipfs/${data.substring(7)}`);
        }
    }, [isLoading, data]);

    useEffect(() => {
        if (metadata) {
          fetch(metadata)
            .then((response) => {return response.json();})
            .then((jsonData) => {
                setVideoSrc(jsonData[config.ANIMATION]);
                setImageSrc(jsonData[config.IMAGE]);
                setAttributes({
                    NAME: jsonData.name,
                    ATTRIBUTE_1: findByTraitType(jsonData.attributes, config.ATTRIBUTE_1.ATTRIBUTE_NAME),
                    ATTRIBUTE_2: findByTraitType(jsonData.attributes, config.ATTRIBUTE_2.ATTRIBUTE_NAME),
                    ATTRIBUTE_3: findByTraitType(jsonData.attributes, config.ATTRIBUTE_3.ATTRIBUTE_NAME)
                })
            })
            .catch((error) => {console.error('Error fetching animation_url:', error);});
        }
    }, [metadata]);


    const info = showInfo ? 
    <div className="info" style={{textAlign: "left" }}>
        <h4>
          {attributes?.NAME.toUpperCase()}
        </h4>
        <span>attributes</span>
        <p className="node-attributes">
        {config.ATTRIBUTE_1.ATTRIBUTE_NAME}: {attributes?.ATTRIBUTE_1.value}
          <br />
          {config.ATTRIBUTE_2.ATTRIBUTE_NAME}: {attributes?.ATTRIBUTE_2.value}
          <br />
          {config.ATTRIBUTE_3.ATTRIBUTE_NAME}: {attributes?.ATTRIBUTE_3.value}
        </p>
      </div> : null
    


    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };


    return (
            <section 
                id="thx-nodes-panel" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >   
                { !isHovered && props.playOnHover? 
                    <img src={`https://ipfs.io/ipfs/${imageSrc.substring(7)}`} />
                    :
                    <>
                    <ReactPlayer
                        id="geo-head"
                        url={ `https://ipfs.io/ipfs/${videoSrc.substring(7)}`}
                        playing={true}
                        loop
                        muted
                        width='100%'
                        height='auto'
                        controls={false}
                        light={false}
                    />
                    {info}
                    </>
                }
            </section>
    )
}