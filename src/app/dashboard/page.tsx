"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "@/components/SideNav";
import StatCard from "@/components/StatCard";
import GradeSection from "@/components/GradeSection";
import { Grade, Student } from "@/types";

export default function Dashboard() {
  const params = useSearchParams();
  const nim = params.get("nim");
  const [student, setStudent] = useState<Student | null>(null);
  const [grades, setGrades] = useState<Grade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!nim) return;
    async function fetchData() {
      try {
        const stu = await axios.get(`/api/students/${nim}`);
        setStudent(stu.data);
        const gr = await axios.get(`/api/students/${nim}/grades`);
        setGrades(gr.data);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [nim]);

  if (loading) return <p className="p-8 text-center">Loading…</p>;
  if (!student) return <p className="p-8 text-center">Mahasiswa tidak ditemukan!</p>;

  return (
    <div className="flex">
      <SideNav nim={student.nim} name={student.name} />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-4">Selamat datang, {student.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {grades.map((g) => (
            <StatCard key={g.category} grade={g} />
          ))}
        </div>
        <h3 className="text-2xl font-bold mt-10 mb-4">Detail Nilai</h3>
        {grades.map((g) => (
          <GradeSection key={g.category} grade={g} />
        ))}
      </main>
    </div>
  );
}
