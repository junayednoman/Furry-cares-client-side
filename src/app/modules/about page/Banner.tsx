import bannerImg from "@/assets/about-bg.jpg";
import Image from "next/image";

const Banner = ({ heading }: { heading: string }) => {
  return (
    <div className="relative lg:h-[500px] md:h-[350px] h-[220px] overflow-hidden text-center">
      {/* Video Background */}
      <Image
        width={1920}
        height={1080}
        alt="Banner"
        src={bannerImg}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Overlay (Optional for darkening the video) */}
      <div className="absolute h-full w-full bg-text bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white md:py-0 xl:max-w-[1350px] lg:max-w-5xl md:max-w-[768px] sm:max-w-[640px] xl:px-4 md:mx-auto lg:px-6 sm:mx-auto sm:px-4 px-3">
        <h1 className="xl:text-[80px] xl:leading-[120px] md:text-6xl text-[42px] md:leading-[80px] font-bold">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
