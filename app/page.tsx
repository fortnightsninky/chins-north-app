"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HomeTab from "@/components/HomeTab";
import ScheduleTab from "@/components/ScheduleTab";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"home" | "schedule">("home");

  return (
    <>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">
        {activeTab === "home" ? (
          <HomeTab onScheduleClick={() => setActiveTab("schedule")} />
        ) : (
          <ScheduleTab />
        )}
      </main>
    </>
  );
}
