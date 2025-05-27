import { useState, useEffect } from 'react'

export function useTime(interval: number = 1000): Date {
    const [time, setTime] = useState<Date>(new Date)

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), interval)

        return () => clearInterval(intervalId)
    }, [interval])

    return time
}