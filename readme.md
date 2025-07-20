# useStack

[![npm version](https://badge.fury.io/js/useStack.svg)](https://badge.fury.io/js/useStack) [![npm](https://img.shields.io/npm/dw/useStack.svg?logo=npm)](https://www.npmjs.com/package/useStack) [![npm](https://img.shields.io/bundlephobia/minzip/useStack)](https://www.npmjs.com/package/useStack)

A lightweight React hook that provides stack operations (push, pop, peek, etc) as well as features like sort, shuffle, reverse and toJSON etc.

---

## Installation

[![NPM](https://nodei.co/npm/useStack.png?compact=true)](https://nodei.co/npm/useStack/)

#### To install the latest stable version:

```sh
npm install useStack
# OR
yarn add useStack
```

---

## Usage

### Basic Example

```jsx
import React from 'react';
import { useStack } from 'useStack';

export default function StackExample() {
  const {
    push,
    pop,
    peek,
    clear,
    reset,
    reverse,
    sort,
    shuffle,
    isEmpty,
    size,
    values,
    toJSON,
    print,
  } = useStack<number>([1, 2, 3]); // Optional initial values

  return (
    <div>
      <h2>React Stack Hook Example</h2>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button onClick={() => push(Math.floor(Math.random() * 100))}>Push Random</button>
        <button onClick={() => pop()}>Pop</button>
        <button onClick={() => alert(`Peek: ${peek() ?? 'None'}`)} disabled={isEmpty()}>Peek</button>
        <button onClick={() => sort((a, b) => a - b)} disabled={isEmpty()}>Sort Asc</button>
        <button onClick={reverse} disabled={isEmpty()}>Reverse</button>
        <button onClick={shuffle} disabled={isEmpty()}>Shuffle</button>
        <button onClick={clear}>Clear</button>
        <button onClick={reset}>Reset</button>
        <button onClick={print}>Print to Console</button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <p><strong>Stack size:</strong> {size()}</p>
        <p><strong>Top of Stack:</strong> {peek() ?? 'None'}</p>
        <p><strong>Is Empty:</strong> {isEmpty() ? 'Yes' : 'No'}</p>
        <p><strong>Values:</strong> {JSON.stringify(values())}</p>
        <p><strong>JSON:</strong> {toJSON()}</p>
      </div>
    </div>
  );
}
```