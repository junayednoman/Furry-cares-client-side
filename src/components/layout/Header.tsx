"use client";
import Image from "next/image";
import logoIcon from "@/assets/icon.svg";
import FContainer from "../ui/Container";
import Link from "next/link";
import FButton from "../ui/FButton";
import { AlignJustify, Moon, Search } from "lucide-react";
import FDrawer from "../ui/FDRawer";

const Header = () => {
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
            <div className="md:flex items-center gap-8 font-medium hidden">
              <Link
                className="relative group decoration-transparent"
                href={"/"}
              >
                <span>Home</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                className="relative group decoration-transparent"
                href={"/"}
              >
                <span>Feed</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                className="relative group decoration-transparent"
                href={"/about"}
              >
                <span>About</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                className="relative group decoration-transparent"
                href={"/contact"}
              >
                <span>Contact</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="md:flex items-center gap-6 hidden">
              <Moon size={20} className="text-text cursor-pointer" />
              <Search size={20} className="text-text cursor-pointer" />
              <FButton link="/auth/login">Login</FButton>
            </div>
            {/* mobile menu */}
            <div className="md:hidden block">
              <FDrawer openBtn={<AlignJustify className="text-text" />}>
                <div>
                  <div className="flex flex-col items-end gap-8 font-medium text-text">
                    <Link
                      className="relative group decoration-transparent text-text"
                      href={"/"}
                    >
                      <span>Home</span>
                      <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                      className="relative group decoration-transparent text-text"
                      href={"/"}
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
                  </div>
                  <div className="flex items-center justify-end mt-8 gap-6">
                    <Moon size={20} className="text-text cursor-pointer" />
                    <Search size={20} className="text-text cursor-pointer" />
                    <FButton link="/auth/login">Login</FButton>
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
