 "use client"

import { Button, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import React, { ChangeEvent, useState } from "react";

interface AppModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const AppModal:React.FC<AppModalProps> = ({ openModal, setOpenModal }: AppModalProps) => {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  function onCloseModal() {
    setOpenModal(false);
    setTask({ title: "", description: "" });
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setTask(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted task:", task);
    onCloseModal();
  };

  return (
    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
      <ModalHeader />
      <ModalBody>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create a new task</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title">Task Title</Label>
            </div>
            <TextInput
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description">Task description</Label>
            </div>
            <TextInput 
              id="description" 
              value={task.description}
              onChange={handleChange}
              required 
            />
          </div>
        </div>
        <div className="w-full my-6">
          <Button onClick={handleSubmit}>SUBMIT</Button>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default AppModal;
