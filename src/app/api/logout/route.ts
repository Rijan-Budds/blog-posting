import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const res = NextResponse.json({ message: "logged out" })

    res.cookies.set("admin_auth", "", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        expires: new Date(0)
    })

    return res
}