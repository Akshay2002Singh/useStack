# useStack

[![npm version](https://badge.fury.io/js/usestack.svg)](https://badge.fury.io/js/usestack) [![npm](https://img.shields.io/npm/dw/usestack.svg?logo=npm)](https://www.npmjs.com/package/usestack) [![npm](https://img.shields.io/bundlephobia/minzip/usestack)](https://www.npmjs.com/package/usestack)

A lightweight React hook that provides stack operations (push, pop, peek, etc) as well as features like sort and shuffle etc..

**Live Demo:** [akshay2002singh.github.io/useStack/](akshay2002singh.github.io/useStack/)

---

## Installation

[![NPM](https://nodei.co/npm/usestack.png?compact=true)](https://nodei.co/npm/usestack/)

#### To install the latest stable version:

```sh
npm install usestack
# OR
yarn add usestack
```

---

## Usage

### Basic Example

```jsx
import React, { useEffect } from 'react';
import { useStack } from 'usestack';

export default function StackExample() {
  // Initialize the stack with some starting values
  const {
    push,
    pop,
    peek,
    clear,
    reset,
    shuffle,
    reverse,
    sort,
    isEmpty,
    size,
    values,
    print,  // for debugging
    version,
  } = useStack<number>([5, 10, 15]); // top to bottom order (5 will be on top of stack) 

  useEffect(() => {
    if (version) {
      console.log('🔁 Stack updated:');
      console.log('Top of Stack:', peek());
      console.log('Size:', size());
      console.log('isEmpty:', isEmpty());
      console.log('Values:', JSON.stringify(values()));
    }
  }, [version]);

  return (
    <div>
      <h2>React Stack Hook Example</h2>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => push(Math.floor(Math.random() * 100))}>Push Random</button>
        <button onClick={pop} disabled={isEmpty()}>Pop</button>
        <button onClick={() => alert(`Peek: ${peek() ?? 'None'}`)} disabled={isEmpty()}>
          Peek
        </button>
        <button onClick={reverse} disabled={isEmpty()}>Reverse</button>
        <button onClick={() => sort((a, b) => a - b)} disabled={isEmpty()}>Sort</button>
        <button onClick={reset}>Reset</button>
        <button onClick={shuffle} disabled={isEmpty()}>Shuffle</button>
        <button onClick={clear} disabled={isEmpty()}>Clear</button>
        <button onClick={print}>Print to Console</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <strong>Current Stack:</strong>
        <pre>{JSON.stringify(values(), null, 2)}</pre>
      </div>
    </div>
  );
}
```
