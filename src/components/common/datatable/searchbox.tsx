"use client";

import { Search } from "lucide-react";
import { constants } from "@/utils/constants";

interface TableSearchProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

export default function TableSearch({
    value,
    onChange,
    placeholder = "Search...",
    className = "",
    buttonText,
    onButtonClick,
}: TableSearchProps) {

    const inputClassSearch = constants.inputClassSearch;

    return (
        <div className={`flex items-center justify-between gap-3 w-full mb-2 ${className}`}>
            <div className="relative w-full max-w-sm">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    className={inputClassSearch}
                />
            </div>

            {buttonText && (
                <button
                    type="button"
                    onClick={onButtonClick}
                    className={`${constants.buttonClass} whitespace-nowrap shrink-0`}
                >
                    {buttonText}
                </button>
            )}
        </div>
    );
}