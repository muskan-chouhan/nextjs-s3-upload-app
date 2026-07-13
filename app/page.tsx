"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  async function handleUpload() {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      alert(result.message);

      if (result.url) {
        window.open(result.url, "_blank");
      }
    } catch (error) {
      console.error(error);
      alert("Upload Failed");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#ffffff",
          padding: "35px",
          borderRadius: "18px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#1e293b",
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          Upload Image to Amazon S3
        </h2>

        <div
          style={{
            border: "2px dashed #cbd5e1",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "25px",
            backgroundColor: "#f8fafc",
          }}
        >
          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files ? e.target.files[0] : null)
            }
            style={{
              width: "100%",
              cursor: "pointer",
            }}
          />
        </div>

        <button
          onClick={handleUpload}
          style={{
            width: "100%",
            padding: "14px",
            background: "#2563eb",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            boxShadow: "0 6px 15px rgba(37,99,235,0.3)",
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
}