import { NextResponse } from "next/server";
import { Ollama } from "ollama";

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const ollama = new Ollama({ host: "http://127.0.0.1:11434" }); // Force IPv4

  try {
    const response = await ollama.chat({
      model: "mistral",
      messages: [{ role: "user", content: prompt }],
      stream: true, // Enable streaming
    });

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          controller.enqueue(new TextEncoder().encode(chunk.message.content));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Ollama API Error:", error);
    return NextResponse.json({ error: "Failed to connect to Ollama" }, { status: 500 });
  }
}
