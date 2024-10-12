import Image from "next/image";
import Link from "next/link";
import verifyIcon from "@/assets/verified.png";
import { TComment } from "@/types/post.type";
import moment from "moment";
import { Popconfirm, Tag } from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { useDeleteData, usePartialUpdate } from "@/hooks/mutation";
import { useUserContext } from "@/context/auth.provider";

const Comment = ({
  comment,
  postAuthorId,
  refetchComments,
}: {
  comment: TComment;
  postAuthorId: string;
  refetchComments: () => void;
}) => {
  const { user } = useUserContext();
  const [isEditable, setIsEditable] = useState(false);
  const [commentText, setCommentText] = useState(comment?.text);
  const { mutateAsync: updateComment, isPending } = usePartialUpdate(
    "update-comment",
    `/comments/${comment?._id}`
  );
  const { mutateAsync: deleteComment, isPending: isDeleteCommentPending } =
    useDeleteData("delete-comment", `/comments/${comment?._id}`);

  const handleUpdateComment = async () => {
    if (isEditable) {
      await updateComment({ text: commentText });
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };

  const handleDeleteComment = async () => {
    await deleteComment();
    refetchComments();
  };

  return (
    <div className="flex gap-3 min-w-full">
      <div>
        <Link
          href={`/profile/${comment?.commenter?._id}`}
          className="inline-block"
        >
          <div
            className="w-[55px] h-[55px] rounded-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${comment?.commenter?.profilePicture})`,
            }}
          ></div>
        </Link>
      </div>
      <div>
        <Link
          href={`/profile/${comment?.commenter?._id}`}
          className="inline-block"
        >
          <h4 className="font-semibold">
            {comment?.commenter?.name}{" "}
            {comment?.commenter?.isVerified && (
              <span className="inline-block">
                <Image
                  className="max-w-[16px] max-h-[16px]"
                  src={verifyIcon}
                  alt="image"
                  width={16}
                  height={16}
                />
              </span>
            )}
          </h4>
        </Link>

        {postAuthorId === comment?.commenter?._id && (
          <p className="text-sm text-gray-400">Author</p>
        )}
        <p className="text-sm text-gray-500 mt-[3px] font-medium">
          {moment(comment?.createdAt).fromNow()}
        </p>
        <div>
          {isEditable ? (
            <TextArea
              onBlur={(e) => setCommentText(e.target.value)}
              rows={5}
              className="hover:border-text focus:border-text sm:w-[550px] w-[280px] block text-sm"
              defaultValue={commentText}
            />
          ) : (
            <p className="leading-7 font-normal sm:text-base text-[15px] m-1">
              {commentText}
            </p>
          )}
        </div>
        {user?._id === comment?.commenter?._id && (
          <div className="mt-2 flex items-center gap-1">
            <Tag
              onClick={handleUpdateComment}
              color="blue"
              className="cursor-pointer"
            >
              {isEditable ? (isPending ? "  Saving..." : "Save") : "Edit"}
            </Tag>
            <Popconfirm
              placement="bottom"
              title="Are you sure?"
              description="Are you sure to delete the comment?"
              onConfirm={handleDeleteComment}
            >
              <Tag color="red" className="cursor-pointer">
                {isDeleteCommentPending ? "Deleting..." : "Delete"}
              </Tag>
            </Popconfirm>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
