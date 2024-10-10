import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { Modal, Spin } from "antd";
import { Dispatch, useState } from "react";
import FUploading from "@/components/ui/form/FUploading";
import FButton from "@/components/ui/FButton";
import { TUser } from "@/types/user.type";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { useUpdateWithFormData } from "@/hooks/mutation";
type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  profile: TUser;
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<any, Error>>;
};

const UpdateProfileModal = ({
  isModalOpen,
  setIsModalOpen,
  profile,
  refetch,
}: TModalProps) => {
  const defaultValues = {
    name: profile?.name,
    bio: profile?.bio,
  };
  const defaultProfilePictureList = [
    {
      uid: "1",
      name: profile?.name,
      status: "done",
      url: profile?.profilePicture,
      // percent: 33,
    },
  ];
  const defaultCoverPictureList = [
    {
      uid: "2",
      name: profile?.name,
      status: "done",
      url: profile?.coverPhoto,
      // percent: 33,
    },
  ];
  const {
    mutate: updateProfile,
    isPending,
    isSuccess,
  } = useUpdateWithFormData("update-profile", "/users/update-profile");

  const [profilePicture, setProfilePicture] = useState<any | undefined>(
    undefined
  );
  const [coverPhoto, setCoverPhoto] = useState<any | undefined>(undefined);

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleProfileUpdate: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    if (profilePicture) {
      formData.append("profilePicture", profilePicture?.originFileObj);
    }
    if (coverPhoto) {
      formData.append("coverPhoto", coverPhoto?.originFileObj);
    }

    updateProfile(formData);
  };

  if (isSuccess) {
    setIsModalOpen(false);
    refetch();
  }

  // handle image uploading
  const handleProfilePicture = (file: any) => {
    setProfilePicture(file.fileList[0]);
  };
  const handleCoverPhoto = (file: any) => {
    setCoverPhoto(file.fileList[0]);
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
        <Spin spinning={isPending}>
          <FForm
            defaultValues={defaultValues}
            handleFormSubmit={handleProfileUpdate}
          >
            <div className="space-y-1 mt-5">
              <FInput name="name" label="Name" placeholder="Enter your name" />
              <FInput name="bio" label="Bio" placeholder="Enter your bio" />
              <div>
                <FUploading
                  defaultFileList={defaultProfilePictureList}
                  description="Upload a square image and size less than 1mb"
                  label="Profile Picture"
                  name="profilePicture"
                  multiple={false}
                  onChange={handleProfilePicture}
                />
              </div>
              <div className="pt-1">
                <FUploading
                  defaultFileList={defaultCoverPictureList}
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
        </Spin>
      </Modal>
    </div>
  );
};

export default UpdateProfileModal;
