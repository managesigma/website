'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  role: 'user' | 'model';
  text: string;
}

// ─── Suggested starters ───────────────────────────────────────────────────────
const STARTERS = [
  'What does Sigmatronics do?',
  'Tell me about IoT solutions',
  'Do you offer internships?',
  'What is VendMonitor?',
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showStarters, setShowStarters] = useState(true);
  const [hovered, setHovered] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;
    setShowStarters(false);

    const userMsg: Message = { role: 'user', text: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // Call our server-side proxy — avoids CORS and keeps API key secret
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData?.error ?? `HTTP ${response.status}`);
      }

      const data = await response.json();
      const replyText =
        data?.reply ??
        "I'm sorry, I couldn't generate a response. Please try again.";

      setMessages((prev) => [...prev, { role: 'model', text: replyText }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [messages, loading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ── Floating Button ──────────────────────────────────────────────────── */}
      <div
        className="chatbot-fab-wrapper"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hover tooltip */}
        <AnimatePresence>
          {hovered && !open && (
            <motion.div
              className="chatbot-tooltip"
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.18 }}
            >
              💬 Talk to SigmaAI
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          id="chatbot-toggle-btn"
          aria-label="Open Sigmatronics AI Chat"
          onClick={() => setOpen((o) => !o)}
          className="chatbot-fab"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4, type: 'spring' }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CloseIcon />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChatIcon />
              </motion.span>
            )}
          </AnimatePresence>

          {/* Pulse ring when closed */}
          {!open && (
            <span className="chatbot-fab-pulse" aria-hidden="true" />
          )}
        </motion.button>
      </div>

      {/* ── Chat Window ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="chatbot-window"
            className="chatbot-window"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-avatar chatbot-header-avatar--orange">
                🟠
              </div>
              <div>
                <p className="chatbot-header-name">Orange</p>
                <p className="chatbot-header-sub">SigmaAI · Always here to help</p>
              </div>
              <div className="chatbot-header-dot" aria-label="Online" />
            </div>

            {/* Messages */}
            <div className="chatbot-messages" role="log" aria-live="polite" aria-label="Chat messages">
              {/* Welcome bubble */}
              {messages.length === 0 && (
                <motion.div
                  className="chatbot-bubble chatbot-bubble--model chatbot-bubble--welcome"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  🍊 Hi! I&apos;m <strong>Orange</strong> — your SigmaAI assistant!
                  Ask me anything about Sigmatronics&apos; hardware, software, IoT solutions, or services. Let&apos;s talk! 😊
                </motion.div>
              )}

              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`chatbot-bubble ${msg.role === 'user' ? 'chatbot-bubble--user' : 'chatbot-bubble--model'}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg.text}
                </motion.div>
              ))}

              {/* Loading dots */}
              {loading && (
                <motion.div
                  className="chatbot-bubble chatbot-bubble--model chatbot-typing"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="chatbot-dot" />
                  <span className="chatbot-dot" />
                  <span className="chatbot-dot" />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Starters */}
            <AnimatePresence>
              {showStarters && (
                <motion.div
                  className="chatbot-starters"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {STARTERS.map((s) => (
                    <button
                      key={s}
                      className="chatbot-starter-btn"
                      onClick={() => sendMessage(s)}
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <form className="chatbot-form" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                id="chatbot-input"
                className="chatbot-input"
                type="text"
                placeholder="Ask about Sigmatronics…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                autoComplete="off"
                aria-label="Type your message"
              />
              <button
                type="submit"
                className="chatbot-send-btn"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────
function ChatIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 14h5" strokeOpacity="0.7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function SigmaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4H6l6 8-6 8h12" />
    </svg>
  );
}
