import { useEffect, useState } from "react";
import { ProgressiveCountOptions } from "../types";

export function useProgressiveCount(value: number, options: ProgressiveCountOptions = { inicialValue: 0, interval: 500, incrementalValue: 1 }): number {
    const [count, setCount] = useState<number>(options.inicialValue)

    useEffect(() => {
        if (count >= value) return

        useEffect(() => {
            const interval = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount >= value) {
                        clearInterval(interval)
                        return value
                    }
                    return prevCount + options.incrementalValue
                })

                return () => clearInterval(interval)
            })
        })
    }, [value, options.interval])

    return count
}