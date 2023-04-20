import { useState } from "react";

interface Props {
  Icon: React.ElementType;
  url: string;
  text?: string;
};

const ExternalLink = ({ Icon, url, text }: Props) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer noopener'
      className='icon-button-external-link'
      onMouseEnter={() => {
        if (!isHovered) {
          setHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (isHovered) {
          setHovered(false);
        }
      }}
    >
      {text ? <span>{text}</span> : null}
      <Icon color={isHovered ? '#00EECC' : undefined} />
    </a>
  );
};

export default ExternalLink;
