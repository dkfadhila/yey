import { NextResponse } from "next/server";
import { students } from "@/data/mock";

export async function GET(_: Request, { params }: { params: { nim: string } }) {
  const student = students.find((s) => s.nim === params.nim);
  return student
    ? NextResponse.json(student)
    : NextResponse.json({ message: "not found" }, { status: 404 });
}
