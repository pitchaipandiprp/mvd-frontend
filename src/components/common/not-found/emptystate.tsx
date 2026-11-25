"use client";

import { FolderOpen } from "lucide-react";

interface EmptyStateProps {
    title?: string;
    description?: string;
}

export default function EmptyState({
    title = "No Records Found",
    description = "There is no data available to display.",
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-2 text-center">
            <FolderOpen className="mb-4 h-12 w-12 text-slate-300" />

            <h3 className="text-md font-semibold text-slate-800">
                {title}
            </h3>

            <p className="mt-2 text-xs text-muted-text">
                {description}
            </p>
        </div>
    );
}