"use client";

import { ProtectedRoute } from "@/lib/auth/auth";

export default function ProtectedLayout({ children }) {
    return (
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
    );
}
