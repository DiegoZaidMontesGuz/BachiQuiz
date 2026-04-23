import { NextRequest, NextResponse } from "next/server";
import { calculatedResult } from "@/lib/quiz";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const result = calculatedResult(body.answers);

    return NextResponse.json({
        character :result,
        traits: body.answers,
    });
}