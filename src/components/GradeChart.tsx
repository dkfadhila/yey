"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Grade } from "@/types";

export default function GradeChart({ grade }: { grade: Grade }) {
  const data = [
    { name: "Min", value: grade.min },
    { name: "Avg", value: grade.avg },
    { name: "Max", value: grade.max },
    { name: "You", value: grade.score },
  ];
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>
    </ResponsiveContainer>
  );
}
