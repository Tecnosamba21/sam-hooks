import { useState } from "react";

interface Value {
    getValue: () => boolean,
    tooggle: () => void
}

export function useToggle(initialValue: boolean): Value {
    const [value, setValue] = useState<boolean>(initialValue)

    const tooggle = () => setValue(value => !value)

    return { getValue: () => { return value }, tooggle }
}