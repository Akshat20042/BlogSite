import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar.jsx";
import DashProfile from "../components/DashProfile.jsx";
import DashPosts from "../components/DashPosts.jsx";
import DashUsers from "../components/DashUsers.jsx";
import DashComments from "../components/DashComments.jsx";
import DashboardComp from "../components/DashboardComp.jsx";
export default function Dashboard() {
  const [tab, setTab] = useState("");
  const location = useLocation();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) setTab(tabFromUrl);
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* Profile */}
      {tab === "profile" && <DashProfile />}
      {/* Posts */}
      {tab === "posts" && <DashPosts />}
      {/* Users */}
      {tab === "users" && <DashUsers />}
      {/* Comments */}
      {tab === "comments" && <DashComments />}
      {/* Dashboard */}
      {tab === "dash" && <DashboardComp />}
    </div>
  );
}
