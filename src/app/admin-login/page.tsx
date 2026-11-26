"use client"

import { PanelLoginForm } from "@/components/pages/users/panel-login-form";
import { useGuestRedirect } from "@/hooks/useGuestRedirect";
import AuthProvider from "@/stores/auth/authProvider";

function AdminLoginContent() {

    useGuestRedirect("/admin/dashboard");

    return <PanelLoginForm role="admin" />;
}

export default function AdminLoginPage() {
    return (
        <AuthProvider>
            <AdminLoginContent />
        </AuthProvider>
    );
}
