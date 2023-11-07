import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import "./Example.css";
import MouseAnimation from "../Mouseanimation/MouseAnimation";

const Example = () => {
  const container = useRef();
  const t1 = useRef();

  const toggleTimeline = () => {
    t1.current.reversed(!t1.current.reversed());
  };

  useLayoutEffect(() => {
    const ctx = gsap.context((e) => {
      const el = e.selector(".box");

      t1.current = gsap
        .timeline()
        .to(el[0], {
          x: 20,
          rotation: "+=360",
          scale: 1.2,
          opacity: 0.8,
          ease: "elastic.out(1, 0.3)", // Apply an elastic ease
          duration: 1,
        })
        .to(
          el[1],
          {
            x: -120,
            rotation: -360,
            backgroundColor: "#ff5733",
            duration: 0.6,
          },
          "<"
        )
        .to(el[2], { rotation: 360, scale: 2.2, opacity: 0.8 })
        .reverse();
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="mid">
      <MouseAnimation />
      <div className="btn">
        <button onClick={toggleTimeline}>Toggle Timeline</button>
      </div>

      <div className="box">
        <img
          width="70%"
          src="https://images.unsplash.com/photo-1583766395091-2eb9994ed094?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="first"
        />
      </div>
      <div className="box">
        <img
          width="70%"
          src="https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="second"
        />
      </div>
      <div className="box">
        <img
          width="70%"
          src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="third"
        />
      </div>
    </div>
  );
};

export default Example;
