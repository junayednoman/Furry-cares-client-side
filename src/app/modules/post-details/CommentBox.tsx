import FButton from "@/components/ui/FButton";
import FForm from "@/components/ui/form/FForm";
import FTextArea from "@/components/ui/form/FTextArea";

import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "@/validation/comment.validation";
import Comment from "./Comment";
import { usePost } from "@/hooks/mutation";
import { useEffect, useState } from "react";
import LoginModal from "../profile page/LoginModal";
import { useHandleQuery } from "@/hooks/useHandleQuery";
import { TComment } from "@/types/post.type";
import CommentSkeleton from "@/app/(generalLayout)/skeletons/CommentSkeleton";
import Image from "next/image";
import spinImg from "@/assets/spin.svg";

const CommentBox = ({
  postId,
  commenterId,
  postAuthorId,
}: {
  postId: string;
  commenterId: string | undefined;
  postAuthorId: string;
}) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [commentLimit, setCommentLimit] = useState(3);

  const {
    data: commentData,
    isLoading: isCommentLoading,
    refetch: refetchComments,
    isFetching,
  } = useHandleQuery("get-comments", `/comments`, {
    post: postId,
    limit: commentLimit,
  });

  useEffect(() => {
    refetchComments();
  }, [commentLimit, refetchComments]);

  const comments = commentData?.data?.result;
  const { mutateAsync: handleComment, isPending } = usePost(
    "create-comment",
    "/comments"
  );

  const handleCommentSubmit = async (data: FieldValues) => {
    if (!commenterId) {
      return setIsLoginModalOpen(true);
    }
    const payload = {
      post: postId,
      commenter: commenterId,
      text: data.comment,
    };
    await handleComment(payload);
    refetchComments();
  };

  return (
    <div className=" w-full">
      <FForm
        reset={true}
        resolver={zodResolver(commentSchema)}
        handleFormSubmit={handleCommentSubmit}
      >
        <div className="space-y-3">
          <FTextArea name="comment" placeholder="Write a comment" rows={6} />
          <FButton disabled={isPending} htmlType="submit">
            {isPending ? "Posting..." : "Post"}
          </FButton>
        </div>
      </FForm>
      <div className="mt-12">
        {isCommentLoading ? (
          <>
            <CommentSkeleton />
            <CommentSkeleton />
            <CommentSkeleton />
          </>
        ) : (
          <div>
            {commentData?.data?.meta?.total > 0 && (
              <h6 className="font-semibold text-xl">
                Comments ({commentData?.data?.meta?.total})
              </h6>
            )}
            <div>
              {comments?.map((comment: TComment, index: number) => (
                <div
                  className={`border-b border-x-0 border-t-0 border-solid border-slate-200 py-6 ${
                    (index === comments?.length - 1 ||
                      commentData?.data?.meta?.total) == 1 && "border-b-0"
                  }`}
                  key={comment._id}
                >
                  <Comment
                    refetchComments={refetchComments}
                    postAuthorId={postAuthorId}
                    comment={comment}
                  />
                </div>
              ))}
            </div>
            {isFetching && (
              <div className="flex items-center justify-center h-[100px]">
                <Image
                  width={100}
                  height={100}
                  className="max-w-[80px] max-h-[80px]"
                  src={spinImg}
                  alt="loading"
                />
              </div>
            )}
            {commentData?.data?.meta?.total > commentLimit && (
              <div>
                {commentData?.data?.meta?.total !== comments.length && (
                  <div className="mt-4">
                    <FButton
                      disabled={isPending}
                      onclick={() => setCommentLimit(commentLimit + 3)}
                    >
                      {isPending || isFetching ? "Loading..." : "Show more"}
                    </FButton>
                  </div>
                )}
                {commentData?.data?.meta?.total === comments.length && (
                  <div className="mt-4">
                    <FButton
                      disabled={isPending}
                      onclick={() => setCommentLimit(3)}
                    >
                      {isPending || isFetching ? "Loading..." : "Show less"}
                    </FButton>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* login modal */}
      <LoginModal
        isModalOpen={isLoginModalOpen}
        setIsModalOpen={setIsLoginModalOpen}
      />
    </div>
  );
};

export default CommentBox;
