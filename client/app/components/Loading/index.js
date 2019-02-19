import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Circle from './Circle';
import Wrapper from './Wrapper';

const FALLBACK_TIME = 400;

const LoadingIndicator = ({ children, isLoading }) => {
  const [fallback, setFalback] = useState(true);

  useEffect(
    () => {
      setFalback(true);
      setTimeout(() => {
        setFalback(false);
      }, FALLBACK_TIME);
    },
    [children]
  );

  return (
    <>
      {isLoading && !fallback ? (
        <Wrapper>
          <Circle />
          <Circle rotate={30} delay={-1.1} />
          <Circle rotate={60} delay={-1} />
          <Circle rotate={90} delay={-0.9} />
          <Circle rotate={120} delay={-0.8} />
          <Circle rotate={150} delay={-0.7} />
          <Circle rotate={180} delay={-0.6} />
          <Circle rotate={210} delay={-0.5} />
          <Circle rotate={240} delay={-0.4} />
          <Circle rotate={270} delay={-0.3} />
          <Circle rotate={300} delay={-0.2} />
          <Circle rotate={330} delay={-0.1} />
        </Wrapper>
      ) : (
        children
      )}
    </>
  );
};

LoadingIndicator.prototypes = {
  children: PropTypes.element.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default LoadingIndicator;
