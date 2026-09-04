import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, FileCode, Sparkles, Terminal } from "lucide-react";
import { personalData } from "@/data/personal";

export const CodeWindow = ({ className = "" }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("component");

  const componentSnippet = `// FullStackDeveloper.jsx
import React, { useState, useEffect } from "react";

export function FullStackDeveloper() {
  const [status, setStatus] = useState("Building Scalable Full Stack Apps");

  const developer = {
    name: "${personalData.name}",
    role: "Full Stack Developer",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript ES6+",
      "RESTful APIs",
      "SQL & C#"
    ],
    education: "MCA Graduate (2024 - 2026)",
    location: "Virudhunagar, Tamil Nadu",
    isAvailable: true
  };

  return (
    <FullStackApp
      developer={developer}
      status={status}
      stack="MERN Stack"
    />
  );
}`;

  const backendSnippet = `// apiServer.js (Node.js + Express + MongoDB)
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Real-Time MERN Auction & Bid Validation Endpoint
router.post("/api/auctions/:id/bid", async (req, res) => {
  const { amount, bidderId } = req.body;
  const auction = await Auction.findById(req.params.id);

  // Dynamic highest-bid validation logic
  if (amount <= (auction.currentHighestBid || 0)) {
    return res.status(400).json({ error: "Bid must exceed highest current bid" });
  }

  auction.currentHighestBid = amount;
  auction.highestBidder = bidderId;
  await auction.save();

  return res.status(200).json({ success: true, auction });
});`;

  const currentCode = activeTab === "component" ? componentSnippet : backendSnippet;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className={`w-full max-w-lg mx-auto rounded-2xl overflow-hidden glass-card shadow-glass border border-sky-500/25 hover:border-sky-500/40 transition-colors duration-300 ${className}`}
    >
      {/* Titlebar with window buttons */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#080d1e]/90 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block shadow-sm" />
        </div>

        {/* Editor Tabs */}
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/[0.05]">
          <button
            onClick={() => setActiveTab("component")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all ${
              activeTab === "component"
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <FileCode className="w-3 h-3 text-sky-400" />
            <span>FullStackDeveloper.jsx</span>
          </button>
          <button
            onClick={() => setActiveTab("hook")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all ${
              activeTab === "hook"
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Terminal className="w-3 h-3 text-purple-400" />
            <span>apiServer.js</span>
          </button>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          aria-label="Copy Code"
          className="text-slate-400 hover:text-slate-200 p-1.5 rounded-md hover:bg-white/[0.06] transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto bg-[#050713]/95 text-slate-300">
        <pre className="flex">
          <span className="select-none text-slate-600 pr-4 text-right inline-block border-r border-slate-800/80 mr-4 font-mono">
            {currentCode.split("\n").map((_, i) => (
              <span key={i} className="block">
                {String(i + 1).padStart(2, "0")}
              </span>
            ))}
          </span>
          <code className="font-mono flex-1">
            {currentCode.split("\n").map((line, idx) => {
              let styledLine = line;

              if (line.trim().startsWith("//")) {
                styledLine = <span className="text-slate-500 italic">{line}</span>;
              } else if (
                line.includes("import") ||
                line.includes("export") ||
                line.includes("const") ||
                line.includes("function") ||
                line.includes("return") ||
                line.includes("from")
              ) {
                styledLine = (
                  <span>
                    {line.split(" ").map((token, tIdx) => {
                      if (
                        [
                          "import",
                          "export",
                          "const",
                          "function",
                          "return",
                          "from",
                          "true",
                          "false",
                          "default"
                        ].includes(token)
                      ) {
                        return (
                          <span key={tIdx} className="text-purple-400 font-semibold">
                            {token}{" "}
                          </span>
                        );
                      }
                      if (token.startsWith('"') || token.startsWith("`") || token.startsWith("'")) {
                        return (
                          <span key={tIdx} className="text-emerald-300">
                            {token}{" "}
                          </span>
                        );
                      }
                      if (token.includes("useState") || token.includes("useMemo") || token.includes("useCallback")) {
                        return (
                          <span key={tIdx} className="text-sky-400">
                            {token}{" "}
                          </span>
                        );
                      }
                      return <span key={tIdx}>{token} </span>;
                    })}
                  </span>
                );
              } else if (line.includes(":")) {
                const parts = line.split(":");
                styledLine = (
                  <span>
                    <span className="text-sky-300">{parts[0]}</span>:
                    <span className="text-emerald-300">{parts.slice(1).join(":")}</span>
                  </span>
                );
              }

              return (
                <div key={idx} className="block hover:bg-white/[0.02] -mx-2 px-2 rounded">
                  {styledLine}
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Editor Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#04060e] border-t border-white/[0.05] text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300 font-semibold">MERN STACK READY</span>
        </div>
        <div>UTF-8 · LF · {activeTab === "component" ? "JSX / React.js" : "Node.js / Express API"}</div>
      </div>
    </motion.div>
  );
};
