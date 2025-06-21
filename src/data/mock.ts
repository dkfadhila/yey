import { Student, Grade } from "@/types";

export const students: Student[] = [
  { nim: "2025111001", name: "Adi Nugroho", class: "E" },
];

export const grades: Record<string, Grade[]> = {
  "2025111001": [
    { category: "teori", score: 78, min: 55, max: 95, avg: 71, comment: "Baik, lanjutkan." },
    { category: "praktikum", score: 82, min: 60, max: 97, avg: 75, comment: "Eksperimen rapi." },
    { category: "kuis", score: 60, min: 45, max: 85, avg: 65, comment: "Perlu belajar FFT." },
    { category: "portofolio", score: 88, min: 50, max: 93, avg: 80, comment: "Dokumentasi bagus." },
    { category: "projek", score: 92, min: 50, max: 98, avg: 78, comment: "Simulasi planet stabil." },
  ],
};
