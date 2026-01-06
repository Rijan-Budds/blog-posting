import { cookies } from "next/headers";
import Login from "@/components/forms/Login";
import AdminDashboard from "@/components/forms/AdminDashboard";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("admin_auth");

  if (!isLoggedIn) {
    return <Login />;
  }

  return <AdminDashboard />;
}
