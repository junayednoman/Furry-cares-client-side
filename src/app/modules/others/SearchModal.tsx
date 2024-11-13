import { Divider, Input, Modal } from "antd";
import { Dispatch, useEffect, useState } from "react";
import { Search } from "lucide-react";
import MiniPostCard from "@/components/ui/MiniPostCard";
import { TPost } from "@/types/post.type";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import FLoading from "@/components/ui/FLoading";
import useDebounce from "@/hooks/useDebounce";
import NoData from "@/components/ui/NoData";
type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
};

const SearchModal = ({ isModalOpen, setIsModalOpen }: TModalProps) => {
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const searchTerm = useDebounce(searchText);

  const {
    data: postData,
    isFetching,
    isError,
    refetch,
  } = useHandleQuery("getPostsForSearch", "/posts", {
    searchTerm: searchTerm,
    sort: "-votes",
    limit: 4,
    isPublished: true,
  });

  useEffect(() => {
    if (searchTerm) {
      refetch();
    } else if (searchTerm === undefined) {
      refetch();
    }
  }, [refetch, searchTerm]);

  const handleModalCancel = () => {
    setIsModalOpen(false);
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
        <div className="">
          <div className="flex items-center px-5">
            <Search size={22} className="text-accent -mt-5" />
            <div className="mySearchInput w-full ">
              <Input
                className="focus:shadow-none"
                onChange={(e) => setSearchText(e.target.value)}
                name="search"
                placeholder="e.g. puppy, pet stories, pet grooming"
              />
            </div>
          </div>
          <Divider className="mt-0 pt-0 bg-slate-300" />
          {isFetching ? (
            <div className="flex justify-center items-center h-[400px] ">
              <FLoading />
            </div>
          ) : posts.length < 1 || isError ? (
            <NoData />
          ) : (
            <div className="px-5 pt-2">
              {posts?.map((post: TPost, index: number) => (
                <div key={index} onClick={() => setIsModalOpen(false)}>
                  <MiniPostCard index={index} post={post} />
                </div>
              ))}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default SearchModal;
