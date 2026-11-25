"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { useAuthSelector } from "@/stores/auth/useAuth";
import AdminLeftMenu from "@/components/layout/panel/admin-left-menu";
import PanelHeader from "@/components/layout/panel/panel-header";
import PanelFooter from "@/components/layout/panel/panel-footer";

export default function PanelLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    useAuthRedirect("/admin-login");

    const authUser = useAuthSelector((state) => state.auth.user);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const userRole = authUser?.role?.name?.toLowerCase();

    return (
        <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">

            {/* Mobile Backdrop */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                        className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Left Menu */}
            {["super admin", "admin"].includes(userRole) && (
                <AdminLeftMenu isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
            )}


            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <PanelHeader setIsMobileOpen={() => setIsMobileOpen(true)} />

                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    {children}
                </main>

                <PanelFooter />
            </div>
        </div>
    );
}