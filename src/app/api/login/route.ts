import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email === "admin@admin.com" && password === "admin@admin") {
    
    const res = NextResponse.json({ message: "Success" });

    res.cookies.set("admin_auth", "true", {
      httpOnly: true,
      path: "/",
    });

    return res;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
