"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthSelector } from "@/stores/auth/useAuth";

export function useGuestRedirect(redirectTo = "/panel/dashboard") {
    const router = useRouter();

    const { isAuthenticated, user } = useAuthSelector((state) => state.auth);

    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        if (isAuthenticated) {
            const role = user?.role?.name?.toLowerCase().trim();

            if (["super admin", "admin"].includes(role)) {
                router.replace("/admin/dashboard");
            } else if (["customer"].includes(role)) {
                router.replace("/customer/dashboard");
            } else {
                router.replace(redirectTo);
            }

            return;
        }

        setIsChecking(false);
    }, [isAuthenticated, user, router, redirectTo]);

    return isChecking;
}