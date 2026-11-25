"use client";

import { useRouter } from "next/navigation";
import { authRoutes } from "@/services/api/auth.routes";
import { sweetalert } from "@/utils/sweetalert";
import { useAuthDispatch } from "@/stores/auth/useAuth";
import { clearAuth } from "@/stores/auth/authSlice";

export function useLogout(redirectTo = "/") {
    const router = useRouter();
    const dispatch = useAuthDispatch();

    async function logout() {
        const swalResult = await sweetalert.confirm("Are you sure you want to logout?", "Logout Confirmation");
        if (!swalResult.isConfirmed) {
            return;
        }

        try {
            await authRoutes.logoutUser({});
        } catch (caughtError) {
            console.error("Logout failed:", caughtError);
        } finally {

            //clear the auth data in the redux store
            dispatch(clearAuth());

            window.dispatchEvent(new Event("auth-change"));
            router.replace(redirectTo);
        }
    }

    return {
        logout,
    };
}