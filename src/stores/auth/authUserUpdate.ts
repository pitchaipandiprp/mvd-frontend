"use client";

import { store } from "@/stores/auth/authStore";
import { updateAuth } from "@/stores/auth/authSlice";

export async function authUserUpdate(field: Record<string, unknown>) {
    store.dispatch(updateAuth(field));
}