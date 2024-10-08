"use client";
import FButton from "@/components/ui/FButton";
import UpdateProfileModal from "./UpdaetProfileModal";
import { useState } from "react";

const UpdateProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditPost = (id: string) => {
    console.log(id);
    setIsModalOpen(true);
  };
  return (
    <>
      <FButton onclick={() => handleEditPost("id")}>Edit Profile</FButton>
      <UpdateProfileModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default UpdateProfile;
