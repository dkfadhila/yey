"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [nim, setNim] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nim) {
      setError("Masukkan NIM terlebih dahulu");
      return;
    }
    router.push(`/dashboard?nim=${nim}`);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white/5 backdrop-blur rounded-xl p-10 shadow-2xl w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold text-center mb-8">
          Checker Nilai Mahasiswa
          <br /> Masukkan NIM
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            value={nim}
            onChange={(e) => setNim(e.target.value)}
            className={clsx("w-full p-4 rounded-lg text-black", error && "ring-2 ring-red-500")}
            placeholder="2025111001"
          />
          {error && <p className="text-xs text-red-400 mt-2">{error}</p>}
          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-500 rounded-lg py-3 font-semibold"
          >
            Cek Nilai
          </button>
        </form>
      </div>
    </main>
  );
}
