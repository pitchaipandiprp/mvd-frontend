
"use client";

import WebHeader from "@/components/layout/web/web-header";
import WebFooter from "@/components/layout/web/web-footer";

export default function WebLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full bg-white selection:bg-[#facc15] selection:text-[#071e38]">
            <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
                <WebHeader />

                <main className="flex-1 w-full">
                    {children}
                </main>

                <WebFooter />
            </div>
        </div>
    );
}
