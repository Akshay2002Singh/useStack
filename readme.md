# use-stack-hook

A lightweight React hook that provides stack operations (push, pop, peek, etc).

## Installation

```bash
npm install use-stack-hook
```

## Usage

```javascript
import { useStack } from 'use-stack-hook';

const { push, pop, values } = useStack<number>();
```