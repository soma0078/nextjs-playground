import Link from "next/link";

export default function TheHeader() {
  return (
    <nav className="flex justify-center py-2">
      <ul className="flex flex-row gap-4 px-6 w-fit h-16 rounded-full items-center backdrop-blur-md bg-opacity-30 shadow-sm border-y border-white/50">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/responsive">Responsive</Link>
        </li>
      </ul>
    </nav>
  );
}
