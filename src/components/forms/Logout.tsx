"use client"

import { useRouter } from "next/navigation";

export default function Logout() {
    const router = useRouter();

    async function handleLogout() {
        await fetch("/api/logout", { method: "POST" });
        router.refresh();
    }
    return (
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}