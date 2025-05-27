var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  useCycle: () => useCycle,
  useId: () => useId,
  useProgressiveCount: () => useProgressiveCount,
  useTime: () => useTime,
  useToggle: () => useToggle
});
module.exports = __toCommonJS(index_exports);

// src/hooks/useCycle.ts
var import_react = require("react");
function useCycle(array, interval = 500) {
  const [step, setStep] = (0, import_react.useState)(array[0]);
  let index = (0, import_react.useRef)(0);
  if (!array.length) return new Error("useCycle: the array given must not be empty");
  (0, import_react.useEffect)(() => {
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
var import_react2 = require("react");
function useId(identifier = "") {
  const [id, setId] = (0, import_react2.useState)(Symbol(identifier));
  const get = () => {
    return id;
  };
  const generate = () => setId(Symbol(identifier));
  return [get, generate];
}

// src/hooks/useProgressiveCount.ts
var import_react3 = require("react");
function useProgressiveCount(value, options = { inicialValue: 0, interval: 500, incrementalValue: 1 }) {
  const [count, setCount] = (0, import_react3.useState)(options.inicialValue);
  (0, import_react3.useEffect)(() => {
    if (count >= value) return;
    (0, import_react3.useEffect)(() => {
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
var import_react4 = require("react");
function useTime(interval = 1e3) {
  const [time, setTime] = (0, import_react4.useState)(/* @__PURE__ */ new Date());
  (0, import_react4.useEffect)(() => {
    const intervalId = setInterval(() => setTime(/* @__PURE__ */ new Date()), interval);
    return () => clearInterval(intervalId);
  }, [interval]);
  return time;
}

// src/hooks/useToggle.ts
var import_react5 = require("react");
function useToggle(initialValue) {
  const [value, setValue] = (0, import_react5.useState)(initialValue);
  const tooggle = () => setValue((value2) => !value2);
  return { getValue: () => {
    return value;
  }, tooggle };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useCycle,
  useId,
  useProgressiveCount,
  useTime,
  useToggle
});
