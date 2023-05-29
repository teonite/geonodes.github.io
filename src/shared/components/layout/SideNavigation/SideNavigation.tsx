import './style.scss';

import { motion } from 'framer-motion';
import { animate, scroll } from 'motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
  sections: string[];
};

const baseNavWidth = 2;
const expandedNavWidth = 6;
const navElementHeight = 56;

export const SideNavigation = ({ sections }: Props) => {
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) {
      sections.forEach((el) => {
        const target = document.getElementById(el);
        const navProgressElement = document.querySelector(
          `#nav-element-${el} .element-progress`
        );
        if (target && navProgressElement) {
          scroll(
            ({ y }) => {
              animate(
                navProgressElement,
                {
                  y: Math.ceil(navElementHeight * y.progress),
                },
                {
                  duration: 0.05,
                }
              );
            },
            {
              target: target,
            }
          );
        }
      });
    } else {
      initRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <div className="element-background"></div>
          <div className="element-progress"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
