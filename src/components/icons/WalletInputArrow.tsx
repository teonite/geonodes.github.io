type Props = {
    textColor?: string;
  };
  

export const WalletInputArrow = ({ textColor = '#FFF' }: Props) => (
    <svg 
        className="wallet-input-arrow"
        xmlns="http://www.w3.org/2000/svg" 
        width={80} 
        height={80} 
        viewBox="0 0 54 59" fill="none"
      >
    <rect 
        width="80" 
        height="80" 
        transform="translate(0 0.5)" 
        fill="black"
    />
    <path 
        id="arrow"
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M31.781 27.102L27.8889 23.1842L30.05556 20.5L39 29L30.5556 37.5L27.8889 34.8158L31.781 30.898L15 30.898V27.102L31.781 27.102Z" 
        fill={textColor}/>
    </svg>
  );
    