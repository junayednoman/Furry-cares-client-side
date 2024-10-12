import Image from "next/image";
import loadingImg from "@/assets/loading.svg";

const FLoading = ({ size = 100 }: { size?: number }) => {
  return (
    <div className="flex items-center justify-center">
      <Image src={loadingImg} alt="loading" width={size} height={size} />
    </div>
  );
};

export default FLoading;
