"use client";

import { LogOut, Menu, Search, Bell, Home, UserRound, ChevronDown, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";
import { useState } from "react";
import { prefixUrl } from "@/utils/constants";
import { useAuthSelector } from "@/stores/auth/useAuth";


interface HeaderProps {
    setIsMobileOpen: () => void;
}

export default function PanelHeader({ setIsMobileOpen }: HeaderProps) {
    const authUser = useAuthSelector((state) => state.auth.user);

    const roleName = authUser?.role.name.toLowerCase();
    let redirect = '/login';

    if (roleName && roleName == 'admin') {
        redirect = `/${roleName}-login`;
    }
    const { logout } = useLogout(redirect);

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);


    return (
        <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
                <button
                    onClick={setIsMobileOpen}
                    className="p-2 rounded-xl text-primary hover:bg-primary/10 lg:hidden"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center justify-end gap-2 w-50">
                    <div className="relative">
                        {/* Profile Button */}
                        <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="cursor-pointer flex items-center gap-2">
                            {/* Profile Image */}
                            <img
                                src="/images/profile.svg"
                                alt="Profile"
                                className="h-9 w-9 rounded-full object-cover"
                            />

                            {/* Name */}
                            <span className="max-w-[150px] truncate text-sm font-semibold text-gray-700">
                                {authUser?.name ?? "My Account"}
                            </span>

                            {/* Arrow */}
                            <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isProfileMenuOpen ? "rotate-180" : ""}`} />
                        </button>

                        {/* Dropdown */}
                        <div className={`absolute right-0 z-1000 mt-2 w-56 origin-top-right overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl transition-all duration-200 ${isProfileMenuOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"}`}>
                            {/* Profile Header */}
                            <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
                                <img src="/images/profile.svg" alt="Profile" className="h-10 w-10 rounded-full object-cover" />

                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-gray-800">
                                        {authUser?.name ?? "My Account"}
                                    </p>

                                    <p className="text-xs text-gray-400">
                                        Welcome back!
                                    </p>
                                </div>
                            </div>

                            {/* My Profile */}
                            <Link
                                href={`${prefixUrl.admin}/change-profile`}
                                onClick={() => setIsProfileMenuOpen(false)}>
                                <div className="flex cursor-pointer items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50">
                                    <UserRound className="h-5 w-5 text-primary" />

                                    <span className="font-medium">
                                        My Profile
                                    </span>
                                </div>
                            </Link>

                            {/* My Profile */}
                            <Link
                                href={`${prefixUrl.admin}/change-password`}
                                onClick={() => setIsProfileMenuOpen(false)}>
                                <div className="flex cursor-pointer items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-50">
                                    <LockKeyhole className="h-5 w-5 text-primary" />

                                    <span className="font-medium">
                                        Change Password
                                    </span>
                                </div>
                            </Link>

                            {/* Logout */}
                            <div
                                onClick={() => {
                                    setIsProfileMenuOpen(false);
                                    logout();
                                }}
                                className="flex cursor-pointer items-center gap-3 border-t border-gray-100 px-4 py-3 text-sm text-red-600 transition-colors hover:bg-red-50">
                                <LogOut className="h-5 w-5 text-primary" />

                                <span className="font-medium">
                                    Logout
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}
