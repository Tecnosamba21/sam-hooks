declare function useCycle<T>(array: T[], interval?: number): T | Error;

declare function useId(identifier?: string): [() => Symbol, () => void];

type ProgressiveCountOptions = {
    inicialValue: number;
    interval: number;
    incrementalValue: number;
};

declare function useProgressiveCount(value: number, options?: ProgressiveCountOptions): number;

declare function useTime(interval?: number): Date;

interface Value {
    getValue: () => boolean;
    tooggle: () => void;
}
declare function useToggle(initialValue: boolean): Value;

export { useCycle, useId, useProgressiveCount, useTime, useToggle };
