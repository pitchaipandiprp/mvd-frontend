"use client";

import { ArrowLeft, ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { constants } from "@/utils/constants";
import { useLogin } from "@/hooks/useLogin";

export function LoginForm() {
    const [step, setStep] = useState<"mobile" | "otp">("mobile");
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");

    const [isMobileValid, setIsMobileValid] = useState(false);
    const [isOtpValid, setIsOtpValid] = useState(false);

    const { loading, error, sendOtp, otpSent, sendingOtp, resendCountdown, loginWithOtp } = useLogin('/customer/dashboard');

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await sendOtp(mobile);

        if (!result) {
            return;
        }

        setStep("otp");
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!otpSent) {
            return;
        }

        await loginWithOtp(mobile, otp, 'customer');
    };

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");

        if (value.length <= 10) {
            setMobile(value);
        }

        setIsMobileValid(false);
        if (value.length == 10) {
            setIsMobileValid(true);
        }

    };

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");

        if (value.length <= 6) {
            setOtp(value);
        }

        setIsOtpValid(false);
        if (value.length == 6) {
            setIsOtpValid(true);
        }
    };

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Content */}
            <div className="flex flex-1 flex-col px-6 pt-12">
                {step === "mobile" ? (
                    <>
                        <div>
                            <h2 className="text-2xl font-bold text-text flex items-center justify-start">
                                Welcome <Sparkles size={26} className="text-primary ml-2 mt-2" />
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-muted-text">
                                Enter your mobile number to continue with {constants.APP_NAME}.
                            </p>
                        </div>

                        <form onSubmit={handleSendOtp} className="mt-8">

                            {/* Mobile Number */}
                            <label className="mb-2 block text-sm font-semibold text-text">
                                Mobile Number
                            </label>

                            <div className="flex h-14 items-center rounded-xl border border-border bg-bg px-4 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                                <Phone size={19} className="shrink-0 text-muted-text" />

                                <span className="ml-3 border-r border-border pr-3 text-sm font-medium text-text">
                                    +91
                                </span>

                                <input
                                    type="tel"
                                    inputMode="numeric"
                                    autoComplete="tel"
                                    value={mobile}
                                    onChange={handleMobileChange}
                                    placeholder="Enter mobile number"
                                    className="ml-3 w-full bg-transparent text-base text-text outline-none placeholder:text-muted-text"
                                    maxLength={10}
                                />
                            </div>

                            <p className="mt-2 text-xs text-muted-text">
                                We'll send a 6-digit OTP to verify your number.
                            </p>

                            {error ? <p className="text-sm text-rose-600 mt-5">{error}</p> : null}

                            {/* Continue */}
                            <button
                                type="submit"
                                disabled={loading || !isMobileValid}
                                className={`w-full h-12 mt-7 flex items-center justify-center ${constants.buttonClass}`}
                            >
                                Continue
                                <ArrowRight size={18} className="ml-1 mt-1" />
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        {/* OTP Header */}
                        <button
                            type="button"
                            onClick={() => {
                                setStep("mobile");
                                setOtp("");
                            }}
                            className="cursor-pointer mb-6 flex w-fit items-center gap-2 text-sm font-medium text-muted-text transition hover:text-primary"
                        >
                            <ArrowLeft size={18} />
                            Change number
                        </button>

                        <div>
                            <p className="mt-2 text-sm leading-6 text-muted-text">
                                Enter the 6-digit OTP sent to
                            </p>

                            <p className="mt-1 text-sm font-semibold text-text">
                                +91 {mobile}
                            </p>
                        </div>

                        <form onSubmit={handleVerifyOtp} className="mt-8">
                            {/* OTP */}
                            <label className="mb-2 block text-sm font-semibold text-text">
                                Enter OTP
                            </label>

                            <input
                                type="text"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                value={otp}
                                onChange={handleOtpChange}
                                placeholder="******"
                                maxLength={6}
                                autoFocus
                                className="h-14 w-full rounded-xl border border-border bg-bg px-4 text-center text-xl font-bold tracking-[0.5em] text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-muted-text"
                            />

                            {/* Verify */}
                            <button
                                type="submit"
                                disabled={loading || !isOtpValid}
                                className={`w-full h-12 mt-7 flex items-center justify-center ${constants.buttonClass}`}
                            >
                                Verify & Continue
                                <ArrowRight size={18} className="ml-1 mt-1" />
                            </button>

                            {/* Resend */}
                            <div className="mt-6 text-center">
                                <p className="text-sm text-muted-text">
                                    Didn't receive the OTP?
                                </p>

                                <button
                                    type="button"
                                    className="cursor-pointer mt-1 text-sm font-semibold text-primary"
                                    disabled={sendingOtp || !mobile || (otpSent && resendCountdown > 0)}
                                    onClick={handleSendOtp}
                                >
                                    {sendingOtp
                                        ? "Sending..."
                                        : otpSent && resendCountdown > 0
                                            ? `Resend OTP in ${resendCountdown}s`
                                            : otpSent
                                                ? "Resend OTP"
                                                : "Send OTP"}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}