import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./MouseAnimation.css"

const Circle = ({ size, delay }) => {
  const el = useRef();

  useEffect(() => {
    const moveTo = (x, y) => {
      gsap.to(el.current, { x, y, delay , duration: 0.01});
    };

    window.addEventListener("pointermove", (e) => {
      moveTo(e.clientX, e.clientY);
    });

    return () => {
      window.removeEventListener("pointermove", moveTo);
    };
  }, [delay]);

  return <div className={`circle ${size}`} ref={el}></div>;
};

const MouseAnimation = () => {
  return (
    <div>
      <Circle size="sm" delay={0} />
      <Circle size="md" delay={0.1} />
      <Circle size="lg" delay={0.2} />
    </div>
  );
};

export default MouseAnimation;
