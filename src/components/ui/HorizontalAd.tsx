import Image from "next/image";

const HorizontalAd = ({
  image,
  link,
  className,
}: {
  image: string;
  link: string;
  className?: string;
}) => {
  return (
    <div className={`sm:mt-12 mt-5 ${className} max-w-[1100px]`}>
      <a target="_blank" href={link}>
        <Image
          className="md:rounded-md rounded-[4px] max-w-full h-auto"
          width={1100}
          height={350}
          src={image}
          alt="ad"
        />
      </a>
      <p className="text-center text-gray-500 text-sm tracking-normal mt-1 font-montserrat">
        Advertisement
      </p>
    </div>
  );
};

export default HorizontalAd;
