"use client";
import AppAvatar from "../components/appAvatar";
import AppSidebar from "../components/appSidebar";
import UserDataTable from "../components/appTable";

export default function Profile() {
  return (
    <div className="w-full bg-gray-500">
      <AppSidebar />
      <div className="w-full h-full ml-[128px] p-10 flex flex-col justify-center items-center gap-6">
        <div className="rounded-full p-1 bg-gray-200">
          <AppAvatar src={"https://picsum.photos/200"} size={120} />
        </div>
        <UserDataTable />
      </div>
    </div>
  );
}
