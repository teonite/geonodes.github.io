import { useState } from 'react';

interface Props {
  Icon: React.ElementType;
  url: string;
  text?: string;
  odd?: boolean;
}

export const ExternalLink = ({ Icon, url, text, odd = false }: Props) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="icon-button-external-link"
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
      {text ? <span style={{ color: odd ? 'black' : 'white' }}>{text}</span> : null}
      <Icon color={isHovered ? '#00EECC' : odd ? 'black' : undefined} />
    </a>
  );
};
