import { ReactNode, useState } from "react";
import { Drawer } from "antd";

const FDrawer = ({
  children,
  openBtn,
  title,
}: {
  children: ReactNode;
  openBtn: ReactNode;
  title?: string;
}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={showDrawer}>{openBtn}</div>
      <Drawer title={title} onClose={onClose} open={open}>
        {children}
      </Drawer>
    </>
  );
};

export default FDrawer;
