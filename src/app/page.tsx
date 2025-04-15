"use client"

import { useState } from "react";
import AppHeader from "./components/appHeader";
import AppModal from "./components/appModal";
import AppCardsContainer from "./containers/cards";

export default function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
          <AppHeader onNewTaskClick={() => setOpenModal(true)} />
          <AppModal openModal={openModal} setOpenModal={setOpenModal} />
          <AppCardsContainer/>
    </>
  );
}
