import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/Button";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] px-4 text-center relative overflow-hidden bg-grid-pattern">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-md p-8 sm:p-10 rounded-3xl glass-card border border-white/[0.08] shadow-glass relative z-10 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto shadow-glow-sm">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div>
          <span className="text-5xl sm:text-6xl font-mono font-black text-sky-400 block tracking-tight">
            404
          </span>
          <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-2">
            PAGE NOT FOUND
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
            The page you requested does not exist or has been relocated.
          </p>
        </div>

        <Button
          to="/"
          variant="primary"
          size="md"
          icon={ArrowLeft}
          iconPosition="left"
          className="w-full"
        >
          BACK TO HOME
        </Button>
      </div>
    </div>
  );
};
