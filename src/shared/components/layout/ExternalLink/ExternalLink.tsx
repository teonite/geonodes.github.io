import './style.scss';

import { ReactNode } from 'react';

import { LinkIcon } from '../../../../components/icons/LinkIcon';

interface Props {
  icon?: ReactNode;
  url: string;
  text?: string;
}

export const ExternalLink = ({ icon, url, text }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="icon-button-external-link"
    >
      {text ? <span>{text}</span> : null}
      {icon ?? <LinkIcon />}
    </a>
  );
};
