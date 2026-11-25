"use client";

import { Suspense } from "react";
import GetAQuotePage from "@/components/pages/web/get-a-quote";

export default function WebGetAQuotePage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-[#f4f7fa]" />}>
      <GetAQuotePage />
    </Suspense>
  );
}
