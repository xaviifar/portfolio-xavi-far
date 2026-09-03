"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import SectionHeader from "@/app/components/SectionHeader";

interface Message {
  id: number;
  role: "system" | "ai" | "user";
  text: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "system",
    text: "System initialized. Knowledge base loaded: Xavi Far (Resume, Projects, Tech Stack).",
    timestamp: "System — 00:00:01",
  },
  {
    id: 2,
    role: "ai",
    text: "Hi there. I'm Xavi's digital twin. I'm trained specifically on his engineering background, architectures, and philosophy. What would you like to know about him?",
    timestamp: "Xavi AI — 10:22 AM",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now(),
      role: "user",
      text: inputValue,
      timestamp: `You — ${new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`,
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "ai",
          text: "I'm currently a UI demo. Once Xavi connects my backend to a RAG pipeline or an OpenAI endpoint, I'll be able to answer queries about his experience with Python, autonomous agents, and scalable architectures.",
          timestamp: `Xavi AI — ${new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}`,
        },
      ]);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#161616]">
      {/* Master Container ("Hoja de Papel" blueprint effect) */}
      <div className="mx-auto flex h-screen w-full max-w-[840px] flex-col border-[#161616]/10 px-6 sm:border-x sm:px-12 md:px-16">
        <Header />

        {/* Chat Title */}
        <div className="pt-6 pb-4">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#161616]/50">
              Agent Online
            </span>
          </div>
          <SectionHeader title="Ask my AI" className="mb-2 sm:mb-2" />
          <p className="text-[14px] leading-[1.6] text-[#161616]/60">
            Trained on codebase, resume, and project architecture.
          </p>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto py-6 scroll-smooth pr-1">
          <div className="flex flex-col gap-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "system" && (
                  <div className="w-full flex justify-center my-2">
                    <span className="font-mono text-[10px] text-[#161616]/40 uppercase tracking-widest bg-[#161616]/5 px-3 py-1 rounded-md border border-[#161616]/10">
                      {msg.text}
                    </span>
                  </div>
                )}

                {msg.role === "ai" && (
                  <div className="flex max-w-[85%] gap-3.5 sm:max-w-[75%]">
                    <div className="mt-1 relative h-7 w-7 shrink-0 overflow-hidden rounded-md bg-[#161616]/5 ring-1 ring-inset ring-[#161616]/10">
                      <Image
                        src="/portfolio.jpg"
                        alt="AI Avatar"
                        fill
                        className="object-cover grayscale"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-[#161616]/40">
                        {msg.timestamp}
                      </span>
                      <div className="text-[14px] leading-[1.6] text-[#161616]/80">
                        {msg.text}
                      </div>
                    </div>
                  </div>
                )}

                {msg.role === "user" && (
                  <div className="flex max-w-[85%] flex-col items-end gap-1 sm:max-w-[75%]">
                    <span className="font-mono text-[10px] text-[#161616]/40">
                      {msg.timestamp}
                    </span>
                    <div className="rounded-md bg-[#161616] px-4 py-2.5 text-[14px] leading-[1.6] text-[#f3f3f1]">
                      {msg.text}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex max-w-[85%] gap-3.5">
                  <div className="mt-1 relative h-7 w-7 shrink-0 overflow-hidden rounded-md bg-[#161616]/5 ring-1 ring-inset ring-[#161616]/10">
                    <Image
                      src="/portfolio.jpg"
                      alt="AI Avatar"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 pt-2">
                    <div
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#161616]/40"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#161616]/40"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#161616]/40"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Bar */}
        <div className="border-t border-[#161616]/10 py-4 pb-6">
          <form
            onSubmit={handleSend}
            className="relative flex items-center w-full rounded-md border border-[#161616]/15 bg-[#161616]/5 transition-colors focus-within:border-[#161616]/40 focus-within:bg-white"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about my RAG experience..."
              className="w-full bg-transparent px-4 py-3 text-[14px] text-[#161616] placeholder:text-[#161616]/40 outline-none"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className={`absolute right-2 flex h-7 w-7 items-center justify-center rounded-md transition-all duration-200 ${
                inputValue.trim() && !isTyping
                  ? "bg-[#161616] text-[#f3f3f1]"
                  : "bg-transparent text-[#161616]/20"
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
          <div className="mt-2 text-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#161616]/30">
              AI model response simulated for UI showcase.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}