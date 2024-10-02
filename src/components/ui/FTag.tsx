import Link from "next/link";
import { ReactNode } from "react";

const FTag = ({ children, link }: { children: ReactNode; link?: string }) => {
  return (
    <div className="border-2">
      <Link
        href={link || ""}
        className=" font-medium inline-block text-white capitalize decoration-transparent"
      >
        <span>{children}</span>
      </Link>
    </div>
  );
};

export default FTag;
