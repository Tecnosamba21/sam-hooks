import { useEffect, useRef, useState } from "react";

export function useCycle<T>(array: T[], interval: number = 500): T | Error {
    const [step, setStep] = useState<T>(array[0])
    let index = useRef(0)

    if (!array.length) return new Error('useCycle: the array given must not be empty')

    useEffect(() => {
        const intervalId = setInterval(() => {
            setStep(prevStep => {
                if (index.current >= array.length) {
                    index.current = 0
                    return prevStep
                }
                if (index.current === 0) return array[0]
                index.current++
                return array[index.current -1]
            })

        }, interval)

        return () => clearInterval(intervalId)
    }, [interval])

    return step
}