import { ReactNode } from "react";

const Heading5 = ({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) => {
  return (
    <h2
      style={{ color: color ? color : "" }}
      className={`text-text sm:text-xl text-lg font-semibold mb-0`}
    >
      {children}
    </h2>
  );
};

export default Heading5;
