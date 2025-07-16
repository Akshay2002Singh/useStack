# useStack

[![npm version](https://badge.fury.io/js/useStack.svg)](https://badge.fury.io/js/useStack) [![npm](https://img.shields.io/npm/dw/useStack.svg?logo=npm)](https://www.npmjs.com/package/useStack) [![npm](https://img.shields.io/bundlephobia/minzip/useStack)](https://www.npmjs.com/package/useStack)

A lightweight React hook that provides stack operations (push, pop, peek, etc).

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
import React, { useState, useEffect, useRef } from 'react';
import { useStack } from 'useStack';

export default function StackExample() {
  const {
    push,
    pop,
    peek,
    clear,
    reverse,
    sort,
    isEmpty,
    size,
    values,
    print,
    version, //initial value is 0
  } = useStack<number>();

  useEffect(() => {
    if(version){
        console.log("🔁 Stack updated:");
        console.log("Top of Stack:", peek());
        console.log("Size:", size());
        console.log("isEmpty:", isEmpty());
        console.log("Values:", JSON.stringify(values()));
    }
  }, [version])


  return (
    <div>
      <h2>React Stack Hook Example</h2>

      <div>
        <button onClick={() => push(Math.floor(Math.random() * 100))}>Push Random</button>
        <button onClick={pop}>Pop</button>
        <button onClick={() => alert(`Peek: ${peek() ?? 'None'}`)} disabled={isEmpty()}>Peek</button>
        <button onClick={reverse} disabled={isEmpty()}>Reverse</button>
        <button onClick={() => sort((a, b) => a - b)} disabled={isEmpty()}>Sort Asc</button>
        <button onClick={clear}>Clear</button>
        <button onClick={print}>Print to Console</button> // Print function is useful while debuging
      </div>
    </div>
  );
}
```