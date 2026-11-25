"use client";

import AdminDashboard from "@/components/pages/admin/dashboard/admin-dashboard";
import { useAuthSelector } from "@/stores/auth/useAuth";

export default function DashboardPage() {

  const authUser = useAuthSelector((state) => state.auth.user);
  const userRole = authUser?.role?.name?.toLowerCase();

  if (["super admin", "admin"].includes(userRole)) {
    return <AdminDashboard />;
  }
}
