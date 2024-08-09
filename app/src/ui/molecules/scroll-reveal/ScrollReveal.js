import { useRef, useEffect, Children } from "react";
import scrollReveal from "scrollreveal";

const ScrollReveal = ({ children, origin = "bottom" }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        distance: "60px",
        origin: origin,
        delay: 500,
        duration: 500,
        reset: true,
      });
  }, []);

  return (
    <section ref={sectionRef} data-testid="section">
      {children}
    </section>
  );
};

export default ScrollReveal;
