"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthSelector } from "@/stores/auth/useAuth";

export function useAuthRedirect(redirectTo = "/") {
    const router = useRouter();

    const isAuthenticated = useAuthSelector((state) => state.auth.isAuthenticated);

    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace(redirectTo);
            return;
        }

        setIsChecking(false);
    }, [isAuthenticated, router, redirectTo]);

    return isChecking;
}