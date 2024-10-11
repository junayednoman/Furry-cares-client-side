"use client";
import Image from "next/image";
import logoIcon from "@/assets/icon.svg";
import FContainer from "../ui/Container";
import Link from "next/link";
import FButton from "../ui/FButton";
import {
  AlignJustify,
  CircleUserRound,
  LogOut,
  Moon,
  Search,
} from "lucide-react";
import FDrawer from "../ui/FDRawer";
import FDropdown from "../ui/FDropdown";
import { useState } from "react";
import SearchModal from "@/app/modules/others/SearchModal";
import { useUserContext } from "@/context/auth.provider";
import { items } from "@/constant/sidebar.constant";
import { MenuProps, Spin } from "antd";
import { ItemType } from "antd/es/menu/interface";

const Header = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { user, handleLogout, loading: userLoading } = useUserContext();
  const [isMenuDrawerOpen, setMenuDrawerOpen] = useState(false);

  // handle search modal
  const handleOpenSearchModal = () => {
    setIsSearchModalOpen(true);
    setMenuDrawerOpen(false);
  };

  const dropdownItems: MenuProps["items"] = [
    ...(items as ItemType[]),
    {
      label: (
        <div
          onClick={() => handleLogout()}
          className="flex items-center gap-2 text-red-600"
        >
          <LogOut size={14} />
          <span>Log Out</span>
        </div>
      ),

      key: "3",
    },
  ];

  return (
    <header>
      <div className="py-6 headerBorder">
        <FContainer>
          <div className="flex items-center justify-between gap-12">
            <div>
              <Link
                href={"/"}
                className="flex items-center gap-1 decoration-transparent"
              >
                <Image src={logoIcon} alt="logo" width={35} height={35} />

                <h4 className="font-semibold text-2xl text-text">Furrys</h4>
              </Link>
            </div>
            <div className="lg:flex items-center gap-8 font-medium hidden">
              <Link
                className="relative group decoration-transparent text-text"
                href={"/"}
              >
                <span>Home</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                className="relative group decoration-transparent text-text"
                href={"/posts"}
              >
                <span>Feed</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                className="relative group decoration-transparent text-text"
                href={"/about"}
              >
                <span>About</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                className="relative group decoration-transparent text-text"
                href={"/contact"}
              >
                <span>Contact</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                className="relative group decoration-transparent text-text"
                href={"/pricing"}
              >
                <span>Pricing</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="lg:flex items-center gap-6 hidden">
              <Moon size={20} className="text-text cursor-pointer" />

              {/* show search modal */}
              <div>
                <Search
                  onClick={handleOpenSearchModal}
                  size={20}
                  className="text-text cursor-pointer"
                />
                <SearchModal
                  isModalOpen={isSearchModalOpen}
                  setIsModalOpen={setIsSearchModalOpen}
                />
              </div>

              <Spin spinning={userLoading} className="text-accent">
                {user ? (
                  <FDropdown items={dropdownItems}>
                    <CircleUserRound
                      size={23}
                      className="text-text cursor-pointer"
                    />
                  </FDropdown>
                ) : (
                  <FButton link="/auth/login">Login</FButton>
                )}
              </Spin>
            </div>
            {/* mobile menu */}
            <div className="lg:hidden block">
              <FDrawer
                menuDrawer={isMenuDrawerOpen}
                setMenuDrawerOpen={setMenuDrawerOpen}
                openBtn={<AlignJustify className="text-text" />}
              >
                <div>
                  <div className="flex flex-col items-end gap-8 font-medium text-text">
                    <Link
                      onClick={() => setMenuDrawerOpen(false)}
                      className="relative group decoration-transparent text-text"
                      href={"/"}
                    >
                      <span>Home</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                      onClick={() => setMenuDrawerOpen(false)}
                      className="relative group decoration-transparent text-text"
                      href={"/posts"}
                    >
                      <span>Feed</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                      onClick={() => setMenuDrawerOpen(false)}
                      className="relative group decoration-transparent text-text"
                      href={"/about"}
                    >
                      <span>About</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                      onClick={() => setMenuDrawerOpen(false)}
                      className="relative group decoration-transparent text-text"
                      href={"/contact"}
                    >
                      <span>Contact</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                      onClick={() => setMenuDrawerOpen(false)}
                      className="relative group decoration-transparent text-text"
                      href={"/pricing"}
                    >
                      <span>Pricing</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </div>
                  <div className="flex items-center justify-end mt-8 gap-6">
                    <Moon size={20} className="text-text cursor-pointer" />
                    <Search
                      onClick={handleOpenSearchModal}
                      size={20}
                      className="text-text cursor-pointer"
                    />
                    {user ? (
                      <FDropdown items={dropdownItems}>
                        <CircleUserRound
                          size={23}
                          className="text-text cursor-pointer"
                        />
                      </FDropdown>
                    ) : (
                      <FButton link="/auth/login">Login</FButton>
                    )}
                  </div>
                </div>
              </FDrawer>
            </div>
          </div>
        </FContainer>
      </div>
    </header>
  );
};

export default Header;
