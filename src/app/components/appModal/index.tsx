"use client";

import { Button, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import React, { ChangeEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@/redux/slice"; 

interface AppModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const AppModal: React.FC<AppModalProps> = ({ openModal, setOpenModal }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    description: ""
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(!(task.title.trim() && task.description.trim()));
  }, [task.title, task.description]);

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
    if (isSubmitDisabled) return; 
  
    dispatch(addTask({
      title: task.title.trim(),
      description: task.description.trim()
    }));
    
    onCloseModal();
  };

  return (
    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
      <ModalHeader />
      <ModalBody>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Create a new task
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" />
            </div>
            <TextInput
              id="title"
              placeholder="Enter task title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" />
            </div>
            <TextInput 
              id="description"
              placeholder="Enter task description"
              value={task.description}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="w-full">
            <Button 
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
              className={`w-full ${
                isSubmitDisabled 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-cyan-700 hover:bg-cyan-800"
              }`}
            >
              Create Task
            </Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AppModal;