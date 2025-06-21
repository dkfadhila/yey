import { NextResponse } from "next/server";
import { grades } from "@/data/mock";

export async function GET(_: Request, { params }: { params: { nim: string } }) {
  const data = grades[params.nim];
  return data
    ? NextResponse.json(data)
    : NextResponse.json({ message: "not found" }, { status: 404 });
}
