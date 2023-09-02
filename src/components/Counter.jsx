import React, { useState, useRef } from "react";
import CountUp, { useCountUp } from "react-countup";

function Counter({ count }) {
  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: count || 123,
    duration: 4,
    startOnMount: false,
    enableScrollSpy: true,
    scrollSpyDelay: 100,
  });
  return <span ref={countUpRef} />;
}

export default Counter;
