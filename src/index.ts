import { useCallback, useRef } from 'react';

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
  versionRef: React.MutableRefObject<number>;
};

export function useStack<T>(): StackHook<T> {
  const stackRef = useRef<T[]>([]);
  const versionRef = useRef<number>(0);

  const triggerVersion = () => {
    versionRef.current++;
  };

  const push = useCallback((item: T) => {
    stackRef.current.push(item);
    triggerVersion();
  }, []);

  const pop = useCallback(() => {
    const popped = stackRef.current.pop();
    triggerVersion();
    return popped;
  }, []);

  const peek = useCallback(() => {
    const items = stackRef.current;
    return items[items.length - 1];
  }, []);

  const clear = useCallback(() => {
    stackRef.current = [];
    triggerVersion();
  }, []);

  const reverse = useCallback(() => {
    stackRef.current.reverse();
    triggerVersion();
  }, []);

  const sort = useCallback((compareFn?: (a: T, b: T) => number) => {
    stackRef.current.sort(compareFn);
    triggerVersion();
  }, []);

  const isEmpty = useCallback(() => stackRef.current.length === 0, []);
  const size = useCallback(() => stackRef.current.length, []);
  const values = useCallback(() => [...stackRef.current], []);
  const print = useCallback(() => {
    console.log('[Stack contents top → bottom]:', [...stackRef.current].reverse());
  }, []);

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
    versionRef, // used externally to detect stack updates
  };
}
