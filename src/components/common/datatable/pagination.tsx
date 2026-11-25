"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TablePaginationProps {
    page: number;
    totalPages: number;
    totalRecords?: number;
    size?: number;
    loading?: boolean;
    showPageInfo?: boolean;
    showTotalRecords?: boolean;
    showBorder?: boolean;
    mode?: "number" | "scroll";
    loadingMore?: boolean;
    onPageChange: (page: number) => void;
}

export default function TablePagination({
    page,
    totalPages,
    totalRecords = 0,
    size = 5,
    loading = false,
    showPageInfo = true,
    showTotalRecords = true,
    showBorder = true,
    mode = "number",
    loadingMore = false,
    onPageChange,
}: TablePaginationProps) {
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    const hasMore = page < totalPages;

    useEffect(() => {
        if (mode !== "scroll") return;

        const element = loadMoreRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (
                    entry.isIntersecting &&
                    hasMore &&
                    !loading &&
                    !loadingMore
                ) {
                    onPageChange(page + 1);
                }
            },
            {
                root: null,
                rootMargin: "150px",
                threshold: 0,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [
        mode,
        page,
        hasMore,
        loading,
        loadingMore,
        onPageChange,
    ]);

    if (totalPages <= 1 || totalRecords === 0) {
        return null;
    }

    // Scroll pagination mode
    if (mode === "scroll") {
        return (
            <div
                ref={loadMoreRef}
                className="w-full py-4 text-center"
            >
                {(loading || loadingMore) && (
                    <p className="text-sm text-gray-500">
                        Loading more transactions...
                    </p>
                )}

                {!hasMore && !loading && !loadingMore && (
                    <p className="text-sm text-gray-400">
                        You have reached the end
                    </p>
                )}
            </div>
        );
    }

    // Existing numbered pagination mode
    const canGoPrevious = page > 1;
    const canGoNext = page < totalPages;

    const getPageNumbers = () => {
        let start = Math.max(1, page - Math.floor(size / 2));
        let end = Math.min(totalPages, start + size - 1);

        start = Math.max(1, end - size + 1);

        return Array.from(
            { length: end - start + 1 },
            (_, index) => start + index
        );
    };

    const pageNumbers = getPageNumbers();

    return (
        <div
            className={`flex flex-wrap items-center justify-between gap-4 overflow-x-auto rounded-t rounded-lg bg-white px-5 py-4 ${showBorder ? "border border-slate-200" : ""
                }`}
        >
            {showPageInfo && (
                <div className="text-sm text-slate-600">
                    <span className="text-slate-400">Page</span>{" "}
                    <strong>{page}</strong>{" "}
                    <span className="text-slate-400">of</span>{" "}
                    <strong>{totalPages}</strong>

                    {showTotalRecords && totalRecords > 0 && (
                        <span className="ml-3">
                            |{" "}
                            <span className="text-slate-400">
                                Total Records:
                            </span>{" "}
                            <strong>{totalRecords}</strong>
                        </span>
                    )}
                </div>
            )}

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    disabled={!canGoPrevious || loading}
                    onClick={() => onPageChange(1)}
                    className="cursor-pointer rounded-lg border border-slate-300 px-3 py-2 text-sm hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                    First
                </button>

                <button
                    type="button"
                    disabled={!canGoPrevious || loading}
                    onClick={() => onPageChange(page - 1)}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-300 px-3 py-2 text-sm hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <ChevronLeft size={16} />
                </button>

                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        type="button"
                        disabled={loading}
                        onClick={() => onPageChange(pageNumber)}
                        className={`h-9 min-w-9 cursor-pointer rounded-lg border px-3 text-sm font-medium transition ${pageNumber === page
                            ? "border-primary bg-primary-light text-white"
                            : "border-slate-300 hover:border-primary hover:text-primary"
                            }`}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button
                    type="button"
                    disabled={!canGoNext || loading}
                    onClick={() => onPageChange(page + 1)}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-slate-300 px-3 py-2 text-sm hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <ChevronRight size={16} />
                </button>

                <button
                    type="button"
                    disabled={!canGoNext || loading}
                    onClick={() => onPageChange(totalPages)}
                    className="cursor-pointer rounded-lg border border-slate-300 px-3 py-2 text-sm hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Last
                </button>
            </div>
        </div>
    );
}
