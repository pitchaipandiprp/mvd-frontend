"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, LockKeyhole, Mail, ShieldCheck, } from "lucide-react";
import { useLogin } from "@/hooks/useLogin";
import { constants } from "@/utils/constants";

type LoginFormProps = {
    role: "admin";
};

export function PanelLoginForm({ role }: LoginFormProps) {

    const redirectTo = "/admin/dashboard";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loginWithEmail, loading, error, setError, } = useLogin(redirectTo);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const success = await loginWithEmail(email.trim(), password, role);

        if (success) {
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#831843] via-[#92278F] to-[#AA0C51]">

            {/* Decorative Background */}
            <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full border-[22px] border-white/10" />
            <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-white/5" />

            {/* Decorative circles */}
            {/* <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10" /> */}

            <div className="relative flex min-h-screen items-center justify-center px-4 py-8">

                <div className="w-full max-w-md">

                    {/* Logo */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg">
                            <img
                                src="/images/build-360-logo.svg"
                                alt={constants.APP_NAME}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <h1 className="mt-4 text-2xl font-bold text-white">
                            {constants.APP_NAME}
                        </h1>

                        <p className="mt-1 text-sm text-white/70">
                            Admin Panel
                        </p>
                    </div>

                    {/* Login Card */}
                    <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-black/20 sm:p-8">

                        {/* Heading */}
                        <div className="mb-7">
                            <h2 className="text-2xl font-semibold text-text">
                                Welcome back
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-muted-text">
                                Sign in to access the admin dashboard.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-5">

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-text"
                                >
                                    Email address
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={19}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text"
                                    />

                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);

                                            if (error) {
                                                setError("");
                                            }
                                        }}
                                        placeholder="Enter your email"
                                        autoComplete="email"
                                        required
                                        className={`pl-11 ${constants.inputClass}`}
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-text"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <LockKeyhole
                                        size={19}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text"
                                    />

                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);

                                            if (error) {
                                                setError("");
                                            }
                                        }}
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        required
                                        className={`pl-11 ${constants.inputClass}`}
                                    />
                                </div>
                            </div>

                            {/* Error */}
                            {error && (
                                <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3">
                                    <p className="text-sm text-red-600">
                                        {error}
                                    </p>
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading || !email || !password}
                                className="flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
                            >
                                {loading ? (
                                    "Signing in..."
                                ) : (
                                    <>
                                        Sign in
                                        <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <p className="mt-6 text-center text-[11px] text-white/60">
                        Copyright {new Date().getFullYear()} {constants.APP_NAME}. All rights reserved.
                    </p>

                </div>
            </div>
        </div>
    );
}