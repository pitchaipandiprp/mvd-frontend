"use client";

import { useCallback, useEffect, useRef } from "react";
import { RefreshCw } from "lucide-react";

const CAPTCHA_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CAPTCHA_LENGTH = 6;
const TEXT_COLORS = ["#0b2c52", "#133e70", "#1e3a8a", "#92400e", "#0f172a"];

/**
 * Generates a random alphanumeric captcha string, excluding visually ambiguous characters.
 */
function generateCaptchaCode(length = CAPTCHA_LENGTH): string {
  let result = "";
  for (let i = 0; i < length; i += 1) {
    const index = Math.floor(Math.random() * CAPTCHA_CHARS.length);
    result += CAPTCHA_CHARS[index];
  }
  return result;
}

/**
 * Renders the captcha text onto a canvas with light noise lines, dots, and character rotation.
 */
function drawCaptchaCanvas(canvas: HTMLCanvasElement, code: string) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const { width, height } = canvas;
  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#f8fafc");
  gradient.addColorStop(1, "#e2e8f0");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Subtle background interference lines
  for (let i = 0; i < 5; i += 1) {
    ctx.strokeStyle = i % 2 === 0 ? "rgba(11, 44, 82, 0.16)" : "rgba(234, 179, 8, 0.28)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }

  // Subtle noise dots
  for (let i = 0; i < 28; i += 1) {
    ctx.fillStyle = "rgba(15, 23, 42, 0.18)";
    ctx.beginPath();
    ctx.arc(Math.random() * width, Math.random() * height, 1, 0, Math.PI * 2);
    ctx.fill();
  }

  const charSpacing = (width - 24) / code.length;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  for (let i = 0; i < code.length; i += 1) {
    const char = code[i];
    const x = 16 + i * charSpacing + charSpacing / 2 - 4;
    const y = height / 2 + (Math.random() * 6 - 3);
    const angle = (Math.random() - 0.5) * 0.42;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.font = "700 22px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
    ctx.fillStyle = TEXT_COLORS[i % TEXT_COLORS.length];
    ctx.fillText(char, 0, 0);
    ctx.restore();
  }
}

/**
 * Manages client-only text captcha generation, canvas rendering, refresh, and verification.
 */
export function useTextCaptcha() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const codeRef = useRef<string>("");

  const refreshCaptcha = useCallback(() => {
    const nextCode = generateCaptchaCode();
    codeRef.current = nextCode;
    if (canvasRef.current) {
      drawCaptchaCanvas(canvasRef.current, nextCode);
    }
  }, []);

  useEffect(() => {
    refreshCaptcha();
  }, [refreshCaptcha]);

  const verifyCaptcha = useCallback((input: string) => {
    const expected = codeRef.current;
    return Boolean(expected) && input.trim().toUpperCase() === expected;
  }, []);

  return { canvasRef, refreshCaptcha, verifyCaptcha };
}

interface TextCaptchaProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  value: string;
  onChange: (value: string) => void;
  onRefresh: () => void;
  error?: string;
  inputBorderClass?: string;
  id?: string;
  name?: string;
}

/**
 * Renders a refreshable canvas text captcha paired with a verification input field.
 */
export function TextCaptcha({
  canvasRef,
  value,
  onChange,
  onRefresh,
  error,
  inputBorderClass = "border-slate-300",
  id = "captcha",
  name = "captcha",
}: TextCaptchaProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
      >
        Security Verification <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <canvas
            ref={canvasRef}
            width={170}
            height={46}
            className="rounded-xl border border-slate-300 bg-slate-50 select-none shrink-0"
            aria-label="Text captcha challenge"
          />
          <button
            type="button"
            onClick={onRefresh}
            title="Refresh Captcha"
            aria-label="Refresh Captcha"
            className="h-[46px] w-[46px] shrink-0 rounded-xl border border-slate-300 bg-slate-50 hover:bg-[#0b2c52] hover:text-[#facc15] hover:border-[#0b2c52] text-[#0b2c52] flex items-center justify-center transition-colors cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        <input
          type="text"
          id={id}
          name={name}
          maxLength={CAPTCHA_LENGTH}
          autoComplete="off"
          placeholder="Enter captcha code"
          className={`form-input flex-1 w-full px-4 py-3 rounded-xl border text-sm uppercase tracking-widest ${inputBorderClass}`}
          value={value}
          onChange={(event) => {
            const cleaned = event.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
            onChange(cleaned);
          }}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
