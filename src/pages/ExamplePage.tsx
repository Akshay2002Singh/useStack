import React, { useEffect } from "react";
import { useStack } from "usestack";
import CodeBlock from "../components/CodeBlock";

const containerStyle: React.CSSProperties = {
  fontFamily: "sans-serif",
  minHeight: "100vh",
  background: "#1a1a1a",
  padding: "1rem 1rem",
  color: "#fff",
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #333",
  borderRadius: "10px",
  padding: "1.5rem",
  background: "#141111ff",
  maxWidth: "700px",
  margin: "1.5rem auto",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
};

const buttonRowStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginBottom: "1rem",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.5rem 0.8rem",
  borderRadius: "6px",
  border: "1px solid #333",
  background: "#2b2b2b",
  color: "#fff",
  cursor: "pointer",
};

const disabledButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  opacity: 0.5,
  cursor: "not-allowed",
};

// 👇 just show the hook usage in the code block
const stackCode = `import { useStack } from "usestack";

function Example() {
  const {
    push, pop, peek, clear, reset,shuffle, reverse,
    sort, isEmpty, values, print, version
  } = useStack<number>([5, 10, 15]);

  useEffect(() => {
    if (version) {
      console.log("🔁 Stack updated:", values());
    }
  }, [version]);
}
`;

export default function StackDemo() {
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
    values,
    print,
    version,
  } = useStack<number>([5, 10, 15]);

  useEffect(() => {
    if (version) {
      console.log("🔁 Stack updated:", values());
    }
  }, [version]);

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center" }}>useStack Demo</h1>

      <div style={cardStyle}>
        <h2>Stack Operations</h2>

        {/* 📦 Show code block */}
        <CodeBlock code={stackCode} />

        {/* 🎛 Buttons */}
        <div style={buttonRowStyle}>
          <button style={buttonStyle} onClick={() => push(Math.floor(Math.random() * 100))}>
            Push Random
          </button>
          <button
            style={isEmpty() ? disabledButtonStyle : buttonStyle}
            onClick={pop}
            disabled={isEmpty()}
          >
            Pop
          </button>
          <button
            style={isEmpty() ? disabledButtonStyle : buttonStyle}
            onClick={() => alert(`Peek: ${peek() ?? "None"}`)}
            disabled={isEmpty()}
          >
            Peek
          </button>
          <button
            style={isEmpty() ? disabledButtonStyle : buttonStyle}
            onClick={reverse}
            disabled={isEmpty()}
          >
            Reverse
          </button>
          <button
            style={isEmpty() ? disabledButtonStyle : buttonStyle}
            onClick={() => sort((a, b) => a - b)}
            disabled={isEmpty()}
          >
            Sort
          </button>
          <button style={buttonStyle} onClick={reset}>
            Reset
          </button>
          <button
            style={isEmpty() ? disabledButtonStyle : buttonStyle}
            onClick={shuffle}
            disabled={isEmpty()}
          >
            Shuffle
          </button>
          <button
            style={isEmpty() ? disabledButtonStyle : buttonStyle}
            onClick={clear}
            disabled={isEmpty()}
          >
            Clear
          </button>
          <button style={buttonStyle} onClick={print}>
            Print to Console
          </button>
        </div>

        {/* 📊 Stack state */}
        <div>
          <strong>Current Stack:</strong>
          <pre style={{ color: "#f1f1f1" }}>{JSON.stringify(values(), null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
