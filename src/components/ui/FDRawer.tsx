import { Dispatch, ReactNode, SetStateAction } from "react";
import { Drawer } from "antd";

const FDrawer = ({
  children,
  openBtn,
  title,
  setMenuDrawerOpen,
  menuDrawer,
}: {
  children: ReactNode;
  openBtn: ReactNode;
  title?: string;
  setMenuDrawerOpen: Dispatch<SetStateAction<boolean>>;
  menuDrawer: boolean;
}) => {
  const showDrawer = () => {
    setMenuDrawerOpen(true);
  };

  const onClose = () => {
    setMenuDrawerOpen(false);
  };

  return (
    <>
      <div onClick={showDrawer}>{openBtn}</div>
      <Drawer title={title} onClose={onClose} open={menuDrawer}>
        {children}
      </Drawer>
    </>
  );
};

export default FDrawer;
