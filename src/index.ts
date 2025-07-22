import { useState } from 'react';

export type StackHook<T> = {
  push: (item: T) => void;
  pop: () => T | undefined;
  peek: () => T | undefined;
  clear: () => void;
  reverse: () => void;
  sort: (compareFn?: (a: T, b: T) => number) => void;
  isEmpty: () => boolean;
  size: () => number;
  values: () => T[];
  print: () => void;
  version: number;
};

export function useStack<T>(initialValues: T[] = []): StackHook<T> {
  const [stack, setStack] = useState<T[]>([...initialValues]);
  const [version, setVersion] = useState<number>(0);

  const push = (item: T) => {
    setStack(prev => {
      const newStack = [...prev, item];
      return newStack;
    });
    setVersion(v => v + 1);
  };

  const pop = (): T | undefined => {
    let popped: T | undefined;
    setStack(prev => {
      const newStack = [...prev];
      popped = newStack.pop();
      return newStack;
    });
    setVersion(v => v + 1);
    return popped;
  };

  const peek = (): T | undefined => {
    return stack[stack.length - 1];
  };

  const clear = () => {
    setStack([]);
    setVersion(v => v + 1);
  };

  const reverse = () => {
    setStack(prev => [...prev].reverse());
    setVersion(v => v + 1);
  };

  const sort = (compareFn?: (a: T, b: T) => number) => {
    setStack(prev => [...prev].sort(compareFn));
    setVersion(v => v + 1);
  };

  const isEmpty = () => stack.length === 0;
  const size = () => stack.length;
  const values = () => [...stack];
  const print = () => {
    console.log('[Stack contents top → bottom]:', [...stack].reverse());
  };

  return {
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
    version,
  };
}
