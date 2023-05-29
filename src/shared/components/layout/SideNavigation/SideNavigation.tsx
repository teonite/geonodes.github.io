import './style.scss';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { Colors } from '../../../../constants';
type Props = {
  sections: string[];
};

const baseNavWidth = 2;
const expandedNavWidth = 6;
const navElementHeight = 56;

export const SideNavigation = ({ sections }: Props) => {
  return (
    <nav>
      {sections.map((el) => (
        <NavElement target={el} key={el} />
      ))}
    </nav>
  );
};

type NavElementProps = {
  target: string;
};

const NavElement = ({ target }: NavElementProps) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className="nav-element-container"
      id={`nav-element-${target}`}
      style={{
        height: navElementHeight,
      }}
      onClick={() => {
        const targetElement = document.getElementById(target);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div className="inner-container">
        <motion.div
          variants={{
            idle: {
              width: baseNavWidth,
            },
            hovered: {
              width: expandedNavWidth,
            },
          }}
          className="nav-element"
          animate={hover ? 'hovered' : 'idle'}
        >
          <motion.div
            className="element-background"
            animate={hover ? 'hovered' : 'idle'}
            variants={{
              idle: {
                backgroundColor: Colors.secondary,
              },
              hovered: {
                backgroundColor: Colors.accent,
              },
            }}
          ></motion.div>
          <motion.div className="element-progress"></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
