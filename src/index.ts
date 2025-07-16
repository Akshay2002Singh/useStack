import { useRef, useState } from 'react';

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

export function useStack<T>(): StackHook<T> {
  const stackRef = useRef<T[]>([]);
  const [version, setVersion] = useState<number>(0);

  const triggerVersionUpdate = () => setVersion(v => v + 1);

  const push = (item: T) => {
    stackRef.current.push(item);
    triggerVersionUpdate();
  };

  const pop = () => {
    const popped = stackRef.current.pop();
    triggerVersionUpdate();
    return popped;
  };

  const peek = () => {
    const items = stackRef.current;
    return items[items.length - 1];
  };

  const clear = () => {
    stackRef.current = [];
    triggerVersionUpdate();
  };

  const reverse = () => {
    stackRef.current.reverse();
    triggerVersionUpdate();
  };

  const sort = (compareFn?: (a: T, b: T) => number) => {
    stackRef.current.sort(compareFn);
    triggerVersionUpdate();
  };

  const isEmpty = () => stackRef.current.length === 0;
  const size = () => stackRef.current.length;
  const values = () => [...stackRef.current];
  const print = () => {
    console.log('[Stack contents top → bottom]:', [...stackRef.current].reverse());
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
