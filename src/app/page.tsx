"use client"

import { useState } from "react";
import AppCard from "./components/appCard";
import AppHeader from "./components/appHeader";
import AppModal from "./components/appModal";

export default function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 p-4">
      <AppHeader onNewTaskClick={() => setOpenModal(true)} />
      <AppModal openModal={openModal} setOpenModal={setOpenModal} />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    </>
  );
}
