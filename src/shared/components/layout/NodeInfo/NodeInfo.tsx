import { useMemo } from 'react';
import { thxNodes } from '../../../../constants';
import './style.scss';

type NodeInfoProps = {
    selected: number;
  };


export const NodeInfo = ({ selected }: NodeInfoProps) => {
    const thxNode = useMemo(() => thxNodes[selected], [selected]);
    return (
      <div className="info">
        <h4>
          thx-{String(thxNode.id).padStart(4, '0')}/
          {thxNode.attributes.initials.toUpperCase()}
        </h4>
        <span>attributes</span>
        <p className="node-attributes">
          {thxNode.attributes.baseshape}
          <br />
          {thxNode.attributes.sculpture}
          <br />
          {thxNode.attributes.accentColor}
        </p>
        {/*
  
        <ExternalLink
          url="https://opensea.io/collection/teonite-geonodes"
          text="view full collection on opensea.io"
        />
        */}
      </div>
    );
  };