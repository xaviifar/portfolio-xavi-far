"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import SectionHeader from "@/app/components/SectionHeader";
import Footer from "@/app/components/Footer";

interface Message {
  id: number;
  role: "ai" | "user";
  text: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "ai",
    text: "Hi, I'm Xavi's AI. Ask me anything about his experience, projects, or technical background.",
  },
];

const suggestions = [
  "What can Xavi build?",
  "Tell me about his AI Agents",
  "What is his tech stack?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSend = (text?: string) => {
    const message = (text ?? inputValue).trim();

    if (!message || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        role: "ai",
        text: "This is currently a UI demo. The AI will be connected to Xavi's knowledge base and RAG system here.",
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#161616]">
      <div className="mx-auto flex min-h-screen w-full max-w-[840px] flex-col border-[#161616]/10 px-6 sm:border-x sm:px-12 md:px-16">
        <Header />

        {/* Header */}
        <div className="pt-8">
          <SectionHeader
            index="AI"
            title="Ask my AI."
            subtitle="Explore my experience, projects and technical background through an AI-powered interface."
          />
        </div>

        {/* Chat */}
        <div className="flex-1 py-10">
          <div className="mx-auto flex w-full max-w-[680px] flex-col">
            {/* Messages */}
            <div className="flex flex-col gap-7">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  {message.role === "ai" ? (
                    <div className="flex max-w-[90%] items-start gap-3">
                      <div className="relative mt-0.5 h-7 w-7 shrink-0 overflow-hidden rounded-full bg-white">
                        <Image
                          src="/portfolio.jpg"
                          alt="Xavi AI"
                          fill
                          className="object-cover grayscale"
                        />
                      </div>

                      <p className="text-[14px] leading-[1.7] text-[#161616]/80">
                        {message.text}
                      </p>
                    </div>
                  ) : (
                    <div className="max-w-[80%] rounded-lg bg-[#161616] px-4 py-2.5 text-[14px] leading-[1.6] text-[#f3f3f1]">
                      {message.text}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing */}
              {isTyping && (
                <div className="flex items-center gap-3">
                  <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-white">
                    <Image
                      src="/portfolio.jpg"
                      alt="Xavi AI"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>

                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#161616]/30" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#161616]/30 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#161616]/30 [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && !isTyping && (
              <div className="mt-10">
                <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.15em] text-[#161616]/35">
                  Try asking
                </p>

                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => handleSend(suggestion)}
                      className="rounded-md border border-[#161616]/10 bg-white/60 px-3 py-1.5 text-[11px] text-[#161616]/60 transition-colors hover:border-[#161616]/25 hover:bg-white hover:text-[#161616]"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input */}
        <div className="mx-auto w-full max-w-[680px] pb-8">
          <form
            onSubmit={handleSubmit}
            className="flex items-center rounded-lg border border-[#161616]/15 bg-white/70 transition-colors focus-within:border-[#161616]/35 focus-within:bg-white"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about my work..."
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[14px] outline-none placeholder:text-[#161616]/35"
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send message"
              className={`mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-all ${
                inputValue.trim() && !isTyping
                  ? "bg-[#161616] text-white"
                  : "text-[#161616]/20"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>

          <p className="mt-2 text-center font-mono text-[9px] text-[#161616]/25">
            AI assistant · Ask anything about Xavi
          </p>
        </div>

      </div>
    </main>
  );
}