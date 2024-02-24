"use client";

import { useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BackgroundSVGs = {
  GradientTop: () => (
    <div className="fixed inset-y-0 right-0 z-10  transform-gpu overflow-hidden blur-3xl sm:-top-[35rem] hidden sm:block">
      <div
        className="  aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-gradient-to-tr from-primary/60 to-secondary/50 opacity-30 sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>
  ),
  GridTop: () => (
    <div className="absolute inset-0 text-primary/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-bg"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            x="100%"
            patternTransform="translate(0 -1)"
          >
            <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-bg)"></rect>
      </svg>
    </div>
  ),
  GradientBottom: () => (
    <div className="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/60 to-secondary/50 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </div>
  ),
};

export function NavBar() {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Overview",
      href: `/`,
    },
    {
      label: "Teste2",
      href: `/#`,
    },
    {
      label: "Teste3",
      href: `/#2`,
    },
    {
      label: "Teste4",
      href: `/#3`,
    },
  ];

  const isActiveMenuItem = useCallback(
    (href: string | null) => {
      return href && pathname.includes(href);
    },
    [pathname],
  );

  return (
    <nav className="w-full border-b bg-background">
      <BackgroundSVGs.GradientTop />
      <BackgroundSVGs.GridTop />
      <div className="w-full px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="block"></Link>

            <svg
              className="opacity-20"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M16.88 3.549L7.12 20.451"></path>
            </svg>
            <span className="text-lg font-medium">Linx</span>
          </div>

          <div className="ml-auto mr-0 flex items-center justify-end gap-4"></div>
        </div>

        <ul className="no-scrollbar -mb-4 mt-6 flex list-none items-center justify-start gap-6 overflow-x-auto text-sm">
          {menuItems.map((menuItem) => (
            <li key={menuItem.href}>
              <a
                href={menuItem.href}
                className={`flex items-center gap-2 border-b-2 pb-3 ${
                  isActiveMenuItem(menuItem.href)
                    ? "border-primary font-semibold"
                    : "border-transparent"
                }`}
              >
                <span>{menuItem.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
