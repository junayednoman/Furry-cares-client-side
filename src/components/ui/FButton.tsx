import { Button } from "antd";
type RButtonProps = {
  children: string;
  link?: string;
  wFull?: boolean;
  onclick?: () => void;
  htmlType?: "button" | "submit" | "reset";
  disabled?: boolean;
};
const FButton = ({
  children,
  link,
  wFull,
  onclick,
  htmlType,
  disabled = false,
}: RButtonProps) => {
  return (
    <Button
      disabled={disabled}
      type="link"
      htmlType={htmlType}
      href={link}
      onClick={onclick}
      className={`bg-accent py-[22px] px-7 sm:uppercase capitalize text-sm font-montserrat font-semibold hover:bg-accentDark decoration-transparent text-white ${
        wFull && "w-full"
      }`}
    >
      {children}
    </Button>
  );
};

export default FButton;
