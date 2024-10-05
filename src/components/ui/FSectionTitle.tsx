type TSectionTitleProps = {
  heading: string;
  subHeading?: string;
  align?: "left" | "center" | "right";
  color?: string;
};
const FSectionTitle = ({
  heading,
  subHeading,
  align,
  color,
}: TSectionTitleProps) => {
  return (
    <div
      className={`lg:mb-14 mb-10 space-y-2 capitalize  ${
        align || "text-center"
      }`}
      style={{ color: color }}
    >
      <p className="text-accent uppercase text-sm">{subHeading}</p>
      <h4 className="font-semibold text-text md:text-3xl text-[22px] md:capitalize uppercase dark:text-gray-300">
        {heading}
      </h4>
    </div>
  );
};

export default FSectionTitle;
