"use client";
import { Button } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-[600px] text-center bg-white p-10 rounded-lg FCardShadow space-y-6">
        <FrownOutlined className="text-6xl text-red-500 mb-5" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {error.message ||
            "We're sorry, but the page you're looking for cannot be found or an error occurred."}
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
    </div>
  );
};

export default ErrorPage;
