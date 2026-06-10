"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const MatchMedia = dynamic(
  () => import("../../components/responsive/MatchMedia"),
  {
    ssr: false,
    loading: () => <Skeleton />, // fallback
  },
);

function Skeleton() {
  return (
    <div className="flex-1 rounded-xl border p-4 flex gap-2 items-center justify-center animate-pulse ">
      <div className="w-full h-12 bg-gray-300 rounded" />
    </div>
  );
}

export default function ResponsivePage() {
  return (
    <>
      <h1>Responsive Design</h1>
      <p>This is the responsive design page.</p>
      <div className={cn("flex w-full gap-5")}>
        <div className="flex-1 rounded-xl border p-4 flex gap-2 items-center justify-center">
          <button className="border lg:p-8 p-2">CSS 반응형 버튼</button>
          <span className="hidden lg:block">[CSS] 데스크톱 요소</span>
          <span className="lg:hidden">[CSS] 모바일 요소</span>
        </div>
        <MatchMedia />
      </div>
    </>
  );
}
