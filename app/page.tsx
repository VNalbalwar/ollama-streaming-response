"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResponse("");
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });

    const reader = res.body?.getReader();
    if (!reader) return;

    const decoder = new TextDecoder();
    let accumulatedText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // Decode chunk
      let chunk = decoder.decode(value, { stream: true });

      // Remove <think>...</think> if present
      chunk = chunk.replace(/<think>.*?<\/think>/g, "");

      // Append to accumulated text
      accumulatedText += chunk;

      // Update UI with the new text
      setResponse(accumulatedText);
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Ollama AI Chat</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Type your message..."
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400" disabled={loading}>
          {loading ? "Generating..." : "Send"}
        </button>
      </form>
      <div className="mt-4 p-4 border rounded w-full max-w-md bg-gray-100 min-h-[100px]">
        <p className="whitespace-pre-wrap">{response || "Response will appear here..."}</p>
      </div>
    </div>
  );
}
