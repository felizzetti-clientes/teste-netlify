"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, STORE_URL } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          TRG<span className="text-signal">·</span>FITNESS
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Loja Virtual
          </a>
          <Link
            href="/contato"
            className="border border-signal bg-signal px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-signal-dim"
          >
            Solicite um orçamento
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-muted"
              >
                Loja Virtual
              </a>
            </li>
          </ul>
          <Link
            href="/contato"
            className="mt-6 block border border-signal bg-signal px-5 py-3 text-center text-sm font-medium text-foreground"
            onClick={() => setOpen(false)}
          >
            Solicite um orçamento
          </Link>
        </nav>
      )}
    </header>
  );
}
