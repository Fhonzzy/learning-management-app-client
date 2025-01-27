"use client";
import AppSidebar from "@/components/AppSidebar";
import Loading from "@/components/Loading";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [courseId, setCourseId] = useState<string | null>(null);
  const { user, isLoaded } = useUser();

  //handle useEffect isCoursePage
  if (!isLoaded) return <Loading />;
  if (!user) return <div>Please Sign in to access this page.</div>;
  return (
    <SidebarProvider>
      <div className="dashboard">
        <AppSidebar />
        {/* sidebar will go here */}
        <div className="dashboard__content">
          {/* chapter sidebar will go*/}
          <div className={cn("dashboard__main")} style={{ height: "100vh" }}>
            <main className="dashboard__body">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
