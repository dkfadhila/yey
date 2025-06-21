"use client";
import Link from "next/link";
import { Home, User2, Layers3 } from "lucide-react";

export default function SideNav({ nim, name }: { nim: string; name: string }) {
  return (
    <aside className="hidden md:flex flex-col w-60 bg-black/20 backdrop-blur-lg min-h-screen p-6">
      <div className="text-2xl font-bold mb-10">UNY CF 2025</div>
      <nav className="flex-1 space-y-4">
        <Link className="flex items-center gap-2 hover:text-indigo-400" href={`/dashboard?nim=${nim}`}>
          <Home size={18} /> Ringkasan
        </Link>
        <Link className="flex items-center gap-2 hover:text-indigo-400" href="/profile">
          <User2 size={18} /> Profil
        </Link>
        <Link className="flex items-center gap-2 hover:text-indigo-400" href="https://github.com/deckaaa" target="_blank" rel="noreferrer">
          <Layers3 size={18} /> Repo
        </Link>
      </nav>
      <div className="mt-auto text-sm opacity-70">
        <p>{name}</p>
        <p className="text-xs">{nim}</p>
      </div>
    </aside>
  );
}
