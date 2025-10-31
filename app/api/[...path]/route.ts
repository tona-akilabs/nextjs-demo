import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://kh.fd-api.com/api/v5";
const API_KEY = process.env.FP_API_KEY ?? "volo"; // store in .env for safety

async function proxy(req: NextRequest) {
    const path = req.nextUrl.pathname.replace(/^\/api/, "");
    const target = `${API_BASE}${path}${req.nextUrl.search}`;

    const res = await fetch(target, {
        method: req.method,
        headers: {
            "x-fp-api-key": API_KEY,
            // "content-type": req.headers.get("content-type") ?? "application/json",
        },
        body: ["GET", "HEAD"].includes(req.method) ? undefined : req.body,
    });

    const apiResponse = await res.json();
    //console.warn(apiResponse);
    return NextResponse.json(apiResponse);
}

export const GET = proxy;
export const POST = proxy;
export const PUT = proxy;
export const DELETE = proxy;
