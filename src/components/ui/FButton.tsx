import { Button } from "antd";
type RButtonProps = {
  children: string;
  link?: string;
  wFull?: string;
  onclick?: () => void;
};
const FButton = ({ children, link, wFull, onclick }: RButtonProps) => {
  return (
    <Button
      type="link"
      href={link}
      onClick={onclick}
      className={`Fshadow bg-accent py-[22px] px-7 uppercase text-sm font-montserrat font-semibold hover:bg-accentDark text-white ${
        wFull && "w-full"
      }`}
    >
      {children}
    </Button>
  );
};

export default FButton;
