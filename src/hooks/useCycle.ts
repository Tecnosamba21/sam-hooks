import { useEffect, useRef, useState } from "react";

export function useCycle<T>(array: T[], interval: number = 500): T {
    const [step, setStep] = useState<T>(array[0])
    let index = useRef(0)


    useEffect(() => {

        if (!array.length) return

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