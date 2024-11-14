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
          className="md:rounded-md rounded-sm max-w-full h-auto"
          width={1100}
          height={350}
          src={image}
          alt="ad"
        />
      </a>
    </div>
  );
};

export default HorizontalAd;
