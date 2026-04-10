"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavigation } from "@/lib/placeholders";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/60 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-6 py-5">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-black tracking-[0.08em] text-white">
            BimBoy Studios
          </Link>
          <nav className="hidden items-center gap-2 lg:flex">
            {siteNavigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/62 hover:bg-white/6 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-white/20"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/20"
          >
            Join Beta
          </Link>
        </div>
      </div>
    </header>
  );
}
