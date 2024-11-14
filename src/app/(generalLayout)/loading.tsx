import loadingImg from "@/assets/loading.svg";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="flex items-center justify-center static w-[130px] mx-auto h-[70vh] bg-white overflow-hidden">
      <div>
        <Image
          src={loadingImg}
          alt="loading"
          width={200}
          height={200}
          className="w-[130px]"
        />
      </div>
    </div>
  );
};

export default Loading;
