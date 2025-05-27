# Sam-hooks

![npm version](https://img.shields.io/npm/v/%40tecnosamba21%2Fsam-hooks
)

Sam-hooks is a react hooks collection to accelerate your development experience made with TypeScript.

## Hooks

### `useCycle`

Iterate all the elements of an array infinitely with a given delay.

#### Params

~~~typescript
{
    array: T[],
    delay: number // By default 500 ms
}
~~~

#### Usage example

~~~tsx
import { useCycle } from '@tecnosamba21/sam-hooks'

const emojis = ['📦', '🗂️', '📆']

export function Emojis() {
    const cycle = useCycle<string[]>(emojis, 200)

    return <span>{cycle}</span>
}
~~~

### `useId`

Generate a unique id and change it easily in your code.

#### Params

~~~typescript
{
    identifier: string // By default ''
}
~~~

#### Usage example

~~~tsx
import { useId } from '@tecnosamba21/sam-hooks'

export default function InputWithLabel() {
  const id = useId('email')

  return (
    <div>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </div>
  )
}
~~~

### `useProgressiveCount`

Create a progressive counter with an initial and a final values.

#### Params

~~~typescript
{
    value: number,
    options?: {
        inicialValue: number, // By default 0
        interval: number, // By default 0
        incrementalValue: number // By default 1
    }
}
~~~

#### Usage example

~~~tsx
import { useProgressiveCount } from '@tecnosamba21/sam-hooks'

export function Counter() {
    const counter = useCounter(10)

    return <span>{counter}</span>
}
~~~

### `useTime`

Returns a self-updated object `Date`.

#### Params

~~~typescript
{
    interval: number // By default 1000 ms
}
~~~

#### Usage example

~~~tsx
import { useTime } from '@tecnosamba21/sam-hooks'


export function CurrentTime() {
    const time = useTime()

    return <span>{time.getTime()}</span>
}
~~~

### `useTooggle`

Switches a boolean varible between `true` and `false` values.

#### Params

~~~typescript
{
    initialValue: boolean
}
~~~

#### Usage example

~~~tsx
import { useToggle } from '@tecnosamba21/sam-hooks'

export default function ToggleButton() {
  const value = useToggle()

  return (
    <button onClick={value.toggle}>
      {value.getValue() ? 'Disable' : 'Enable'}
    </button>
  )
}
~~~