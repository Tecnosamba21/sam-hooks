import { useState } from "react";

export function useId(identifier: string = ''): [() => Symbol, () => void] {
    const [id, setId] = useState<Symbol>(Symbol(identifier))

    const get = () => { return id }
    const generate = () => setId(Symbol(identifier))

    return [get, generate]
}