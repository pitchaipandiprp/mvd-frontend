"use client";
import { Suspense } from "react";
import GetAQuotePage from "@/components/pages/web/get-a-quote";

export default function WebGetAQuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <GetAQuotePage />
    </Suspense>
  );
}
