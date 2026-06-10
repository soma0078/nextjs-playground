"use client";

import { useMediaQuery } from "@/lib/useMediaQuery";

export default function MatchMedia() {
  const isDesktop = useMediaQuery(1024);

  return (
    <div className="flex-1 rounded-xl border p-4 flex gap-2 items-center justify-center">
      <button className={`border ${isDesktop ? "p-8" : "p-2"}`}>
        useMediaQuery 반응형 버튼
      </button>
      {isDesktop ? (
        <span>[useMediaQuery] 데스크톱 요소</span>
      ) : (
        <span>[useMediaQuery] 모바일 요소</span>
      )}
    </div>
  );
}
