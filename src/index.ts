import { useState } from 'react';

export type StackHook<T> = {
  push: (item: T) => void;
  pop: () => T | undefined;
  peek: () => T | undefined;
  clear: () => void;
  reset: () => void;
  reverse: () => void;
  sort: (compareFn?: (a: T, b: T) => number) => void;
  shuffle: () => void;
  isEmpty: () => boolean;
  size: () => number;
  values: () => T[];
  toJSON: () => string;
  print: () => void;
};

export function useStack<T>(initial: T[] = []): StackHook<T> {
  const [stack, setStack] = useState<T[]>([...initial]);

  const push = (item: T) => {
    setStack(prev => [...prev, item]);
  };

  const pop = (): T | undefined => {
    let popped: T | undefined;
    setStack(prev => {
      if (prev.length === 0) return prev;
      const newStack = [...prev];
      popped = newStack.pop();
      return newStack;
    });
    return popped;
  };

  const peek = (): T | undefined => {
    return stack[stack.length - 1];
  };

  const clear = () => {
    setStack([]);
  };

  const reset = () => {
    setStack([...initial]);
  };

  const reverse = () => {
    setStack(prev => [...prev].reverse());
  };

  const sort = (compareFn?: (a: T, b: T) => number) => {
    setStack(prev => [...prev].sort(compareFn));
  };

  const shuffle = () => {
    setStack(prev => {
      const shuffled = [...prev];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  const isEmpty = () => stack.length === 0;
  const size = () => stack.length;
  const values = () => [...stack];
  const toJSON = () => JSON.stringify(stack);

  const print = () => {
    console.log('[Stack contents top → bottom]:', [...stack].reverse());
  };

  return {
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
  };
}