// src/hooks/useCycle.ts
import { useEffect, useRef, useState } from "react";
function useCycle(array, interval = 500) {
  const [step, setStep] = useState(array[0]);
  let index = useRef(0);
  if (!array.length) return new Error("useCycle: the array given must not be empty");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setStep((prevStep) => {
        if (index.current >= array.length) {
          index.current = 0;
          return prevStep;
        }
        if (index.current === 0) return array[0];
        index.current++;
        return array[index.current - 1];
      });
    }, interval);
    return () => clearInterval(intervalId);
  }, [interval]);
  return step;
}

// src/hooks/useId.ts
import { useState as useState2 } from "react";
function useId(identifier = "") {
  const [id, setId] = useState2(Symbol(identifier));
  const get = () => {
    return id;
  };
  const generate = () => setId(Symbol(identifier));
  return [get, generate];
}

// src/hooks/useProgressiveCount.ts
import { useEffect as useEffect2, useState as useState3 } from "react";
function useProgressiveCount(value, options = { inicialValue: 0, interval: 500, incrementalValue: 1 }) {
  const [count, setCount] = useState3(options.inicialValue);
  useEffect2(() => {
    if (count >= value) return;
    useEffect2(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= value) {
            clearInterval(interval);
            return value;
          }
          return prevCount + options.incrementalValue;
        });
        return () => clearInterval(interval);
      });
    });
  }, [value, options.interval]);
  return count;
}

// src/hooks/useTime.ts
import { useState as useState4, useEffect as useEffect3 } from "react";
function useTime(interval = 1e3) {
  const [time, setTime] = useState4(/* @__PURE__ */ new Date());
  useEffect3(() => {
    const intervalId = setInterval(() => setTime(/* @__PURE__ */ new Date()), interval);
    return () => clearInterval(intervalId);
  }, [interval]);
  return time;
}

// src/hooks/useToggle.ts
import { useState as useState5 } from "react";
function useToggle(initialValue) {
  const [value, setValue] = useState5(initialValue);
  const tooggle = () => setValue((value2) => !value2);
  return { getValue: () => {
    return value;
  }, tooggle };
}
export {
  useCycle,
  useId,
  useProgressiveCount,
  useTime,
  useToggle
};
