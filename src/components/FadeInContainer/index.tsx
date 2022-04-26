import React from 'react';
import {PresenceTransition} from 'native-base';

interface Props {
  children: React.ReactNode;
  duration?: number;
}

const DURATION_DEFAULT = 250;

export const FadeInContainer = ({children, duration}: Props) => {
  return (
    <PresenceTransition
      visible
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: duration || DURATION_DEFAULT,
        },
      }}>
      {children}
    </PresenceTransition>
  );
};
