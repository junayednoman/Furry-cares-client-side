import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { Divider, Modal } from "antd";
import { Dispatch } from "react";
import { Search } from "lucide-react";
import MiniPostCard from "@/components/ui/MiniPostCard";
import { TPost } from "@/types/post.type";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import FLoading from "@/components/ui/FLoading";
type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

const SearchModal = ({ isModalOpen, setIsModalOpen }: TModalProps) => {
  const { data: postData, isLoading } = useHandleQuery("getPosts", "/posts", {
    sort: "-votes",
    limit: 4,
    isPublished: true,
  });

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleSearch: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };

  const posts = postData?.data?.result;

  return (
    <div>
      <Modal
        className="sm:min-w-[600px] w-full p-0 searchModal"
        footer={null}
        open={isModalOpen}
        onCancel={handleModalCancel}
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-[400px] ">
            <FLoading />
          </div>
        ) : (
          <div className="">
            <FForm handleFormSubmit={handleSearch}>
              <div className="flex items-center px-5">
                <Search size={22} className="text-accent -mt-5" />
                <div className="mySearchInput w-full ">
                  <FInput
                    name="search"
                    placeholder="Write what you are looking for..."
                  />
                </div>
              </div>
            </FForm>
            <Divider className="mt-0 pt-0 bg-slate-300" />
            <div className="px-5 pt-2">
              {posts?.map((post: TPost, index: number) => (
                <div
                  className={`border-b ${
                    index === posts.length - 1 && "border-b-0"
                  } border-t-0 border-x-0 border-solid border-slate-200 py-3`}
                  key={post._id}
                >
                  <MiniPostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SearchModal;
