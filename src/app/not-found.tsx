"use client";
import { Button } from "antd";
import { MehOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-[600px] text-center bg-white p-10 rounded-lg FCardShadow space-y-5">
        <MehOutlined className="text-6xl text-accent mb-5 " />
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button
          type="primary"
          size="large"
          onClick={() => router.push("/")}
          className="bg-accent border-none"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
