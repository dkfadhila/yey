import { Grade } from "@/types";
import GradeChart from "./GradeChart";

export default function GradeSection({ grade }: { grade: Grade }) {
  return (
    <section className="bg-white/5 rounded-xl p-6 mb-6 shadow">
      <h4 className="text-xl font-bold mb-4 uppercase">{grade.category}</h4>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <GradeChart grade={grade} />
        </div>
        <div>
          <h5 className="font-semibold mb-2">Komentar</h5>
          <p className="text-sm whitespace-pre-line">{grade.comment || "—"}</p>
          <div className="grid grid-cols-3 gap-2 mt-4 text-center text-xs">
            <div>
              <span className="block font-bold">{grade.min}</span>Min
            </div>
            <div>
              <span className="block font-bold">{grade.avg}</span>Avg
            </div>
            <div>
              <span className="block font-bold">{grade.max}</span>Max
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
