"use client";
import { Button } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import FContainer from "@/components/ui/Container";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();

  return (
    <FContainer>
      <div className="text-center bg-white p-10 rounded-lg mx-auto space-y-6 md:py-20 py-10">
        <FrownOutlined className="text-6xl text-red-500 mb-5" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {error.message ||
            "An unexpected error occurred. Please try again later."}
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button
            type="primary"
            size="large"
            onClick={() => router.push("/")}
            className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 border-none"
          >
            Back to Home
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 border-none"
          >
            Try again
          </Button>
        </div>
      </div>
    </FContainer>
  );
};

export default ErrorPage;
