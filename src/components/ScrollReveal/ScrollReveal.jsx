import React, { useRef, useEffect } from 'react';
const scrollReveal = require('scrollreveal').default;

const ScrollReveal = ({ children, style, reveal }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal({ distance: '60px', duration: 2500, delay: 400 }).reveal(
        sectionRef.current,
        reveal
          ? reveal
          : {
              // reset: true,
              delay: 500,
            },
      );
  }, []);

  return (
    <section ref={sectionRef} style={style}>
      {children}
    </section>
  );
};

export default ScrollReveal;
