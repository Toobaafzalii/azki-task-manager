"use client";
import { useState, useEffect } from "react";
import AppAvatar from "../components/appAvatar";
import AppModal from "../components/appModal";
import AppSidebar from "../components/appSidebar";
import UserDataTable from "../components/appTable";
import AppInput from "../components/appInput";
import { Button } from "@mui/material";

export interface UserData {
  firstname: string;
  lastname: string;
  birthYear: string;
  phone: string;
  email: string;
}

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    firstname: "",
    lastname: "",
    birthYear: "",
    phone: "",
    email: "",
  });
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("profileFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    const isAllFieldsFilled =
      Boolean(formData.firstname) &&
      Boolean(formData.lastname) &&
      Boolean(formData.birthYear) &&
      Boolean(formData.phone) &&
      Boolean(formData.email);

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    setFormValid(isAllFieldsFilled && isEmailValid);
  }, [formData]);

  const handleInputChange = (field: keyof UserData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (formValid) {
      localStorage.setItem("profileFormData", JSON.stringify(formData));
      setIsModalOpen(false);
    }
  };

  return (
    <div className="w-full bg-gray-500">
      <AppSidebar onOpenModal={() => setIsModalOpen(true)} />
      <div className="w-full h-full ml-[128px] p-10 flex flex-col justify-center items-center gap-6">
        <div className="rounded-full p-1 bg-gray-200">
          <AppAvatar src={"https://picsum.photos/200"} size={120} />
        </div>
        <UserDataTable editedData={formData} />
      </div>

      <AppModal
        open={isModalOpen}
        title="Edit your profile"
        onClose={() => setIsModalOpen(false)}
      >
        <div className="flex flex-col gap-4 p-4">
          <div>
            <AppInput
              label="First Name"
              value={formData.firstname}
              onChange={handleInputChange("firstname")}
              type="text"
              required
            />
            <AppInput
              label="Last Name"
              value={formData.lastname}
              onChange={handleInputChange("lastname")}
              type="text"
              required
            />
            <AppInput
              label="Birth Year"
              value={formData.birthYear}
              onChange={handleInputChange("birthYear")}
              type="number"
              required
            />
            <AppInput
              label="Phone"
              value={formData.phone}
              onChange={handleInputChange("phone")}
              type="number"
              required
            />
            <AppInput
              label="Email"
              value={formData.email}
              onChange={handleInputChange("email")}
              type="email"
              required
            />
          </div>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!formValid}
            sx={{ width: "20%", alignSelf: "center", mt: 2 }}
          >
            Save
          </Button>
        </div>
      </AppModal>
    </div>
  );
}
