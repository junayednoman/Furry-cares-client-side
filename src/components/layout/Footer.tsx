import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import FContainer from "../ui/Container";

const Footer = () => {
  return (
    <div className="space-y-8 border-t border-gray-600">
      <div className="py-14 bg-text  text-white">
        <FContainer>
          <ul className="flex items-center justify-center gap-6 pl-0">
            <li className="list-none">
              <a
                className="text-text p-2 rounded-full bg-white hover:bg-accentColor hover:text-white hover:bg-accent duration-200 flex items-center justify-center"
                href="#"
              >
                <Facebook />
              </a>
            </li>
            <li className="list-none">
              <a
                className="text-text p-2 rounded-full bg-white hover:bg-accentColor hover:text-white hover:bg-accent duration-200 flex items-center justify-center"
                href="#"
              >
                <Instagram />
              </a>
            </li>
            <li className="list-none">
              <a
                className="text-text p-2 rounded-full bg-white hover:bg-accentColor hover:text-white hover:bg-accent duration-200 flex items-center justify-center"
                href="#"
              >
                <Linkedin />
              </a>
            </li>
            <li className="list-none">
              <a
                className="text-text p-2 rounded-full bg-white hover:bg-accentColor hover:text-white hover:bg-accent duration-200 flex items-center justify-center"
                href="#"
              >
                <Youtube />
              </a>
            </li>
            <li className="list-none">
              <a
                className="text-text p-2 rounded-full bg-white hover:bg-accentColor hover:text-white hover:bg-accent duration-200 flex items-center justify-center"
                href="#"
              >
                <Twitter />
              </a>
            </li>
          </ul>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 my-10 text-sm">
            <a
              className="hover:underline hover:text-accentColor duration-200  text-white decoration-transparent"
              href="#"
            >
              Home
            </a>
            <a
              className="hover:underline hover:text-accentColor duration-200  text-white decoration-transparent"
              href="#"
            >
              About
            </a>
            <a
              className="hover:underline hover:text-accentColor duration-200  text-white decoration-transparent"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="hover:underline hover:text-accentColor duration-200  text-white decoration-transparent"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="hover:underline hover:text-accentColor duration-200  text-white decoration-transparent"
              href="#"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-12">
            <p className="text-sm text-center text-slate-200">
              {new Date().getFullYear()} Furry Cares. All Rights Reserved.
            </p>
          </div>
        </FContainer>
      </div>
    </div>
  );
};

export default Footer;
