import { Grade } from "@/types";

export default function StatCard({ grade }: { grade: Grade }) {
  const color = grade.score >= grade.avg ? "text-green-400" : "text-red-400";
  return (
    <div className="bg-white/10 rounded-xl p-6 shadow-md">
      <h4 className="font-semibold uppercase mb-2">{grade.category}</h4>
      <p className="text-4xl font-bold">{grade.score.toFixed(1)}</p>
      <p className={`${color} text-sm`}>{grade.comment}</p>
    </div>
  );
}
