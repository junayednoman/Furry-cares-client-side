import loadingImg from "@/assets/loading.svg";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="flex items-center justify-center static w-full h-[90vh] bg-white overflow-hidden">
      <div>
        <Image src={loadingImg} alt="loading" width={130} height={130} />
      </div>
    </div>
  );
};

export default Loading;
