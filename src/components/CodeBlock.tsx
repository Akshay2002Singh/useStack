import React from "react";

const codeBlockStyle: React.CSSProperties = {
  position: "relative",
  background: "#2d2d2d",
  color: "#f8f8f2",
  fontFamily: "monospace",
  fontSize: "0.9rem",
  padding: "0.75rem",
  borderRadius: "6px",
  overflowX: "auto",
  marginBottom: "1rem",
};

const copyBtnStyle: React.CSSProperties = {
  position: "absolute",
  top: "6px",
  right: "6px",
  background: "#444",
  color: "#fff",
  border: "none",
  fontSize: "0.75rem",
  padding: "0.25rem 0.5rem",
  borderRadius: "4px",
  cursor: "pointer",
};

export default function CodeBlock({ code }: { code: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div style={codeBlockStyle}>
      <button style={copyBtnStyle} onClick={handleCopy}>
        Copy
      </button>
      <pre style={{ margin: 0, textAlign: "left" }}>{code}</pre>
    </div>
  );
}
