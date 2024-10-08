import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { Modal } from "antd";
import { Dispatch } from "react";
import FUploading from "@/components/ui/form/FUploading";
import FButton from "@/components/ui/FButton";
type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

const UpdateProfileModal = ({ isModalOpen, setIsModalOpen }: TModalProps) => {
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleProfileUpdate: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };

  // handle image uploading
  const handleProfilePicture = (file: File) => {
    console.log("file, ", file);
  };
  const handleCoverPhoto = (file: File) => {
    console.log("file, ", file);
  };

  return (
    <div>
      <Modal
        className="lg:min-w-[800px] w-full"
        footer={null}
        title="Update Profile"
        open={isModalOpen}
        onCancel={handleModalCancel}
      >
        <FForm handleFormSubmit={handleProfileUpdate}>
          <div className="space-y-1 mt-5">
            <FInput name="name" label="Name" placeholder="Enter your name" />
            <FInput name="bio" label="Bio" placeholder="Enter your bio" />
            <div>
              <FUploading
                description="Upload a square image and size less than 1mb"
                label="Profile Picture"
                name="profilePicture"
                multiple={false}
                onChange={handleProfilePicture}
              />
            </div>
            <div className="pt-1">
              <FUploading
                description="Upload an image with dimension: 850x260 and size less than 1mb"
                label="Cover Photo"
                name="coverPhoto"
                multiple={false}
                onChange={handleCoverPhoto}
              />
            </div>
            <div className="pt-3">
              <FButton htmlType="submit">Update</FButton>
            </div>
          </div>
        </FForm>
      </Modal>
    </div>
  );
};

export default UpdateProfileModal;
