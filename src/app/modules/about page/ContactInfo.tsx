import FContainer from "@/components/ui/Container";
import FSectionTitle from "@/components/ui/FSectionTitle";
import { LocateIcon, Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="md:py-24 py-16">
      <FContainer>
        <FSectionTitle
          heading="Contact Information"
          subHeading="Reach out to us"
        />
        <div className="xl:w-[1000px] mx-auto mt-10">
          <div className="grid lg:grid-cols-3 justify-center gap-12">
            <div>
              <div className="lg:flex lg:text-left text-center gap-5">
                <div className="flex items-center justify-center lg:w-[112px] w-16 h-16 bg-text dark:bg-gray-300 dark:text-text dark:hover:text-white text-white lg:mb-0 rounded-full hover:bg-accentColor duration-200 cursor-pointer lg:mx-0 mx-auto">
                  <LocateIcon size={30} />
                </div>
                <div className="dark:text-gray-300 lg:mt-0 mt-4">
                  <h6 className="font-semibold uppercase text-lg text-text">
                    Office Address
                  </h6>
                  <p className="mt-2 leading-6">
                    1234 Bike Lane, Suite 567 Cycling City, CA 91011 USA
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:flex lg:text-left text-center gap-5">
                <div className="flex items-center justify-center w-16 h-16 bg-text dark:bg-gray-300 dark:text-text dark:hover:text-white text-white lg:mb-0 rounded-full hover:bg-accentColor duration-200 cursor-pointer lg:mx-0 mx-auto">
                  <Phone size={30} />
                </div>
                <div className="dark:text-gray-300 lg:mt-0 mt-4">
                  <h6 className="font-semibold uppercase text-lg text-text">
                    Phone Number
                  </h6>
                  <p className="mt-2 leading-6">
                    +1 (555) 123-4567 <br />
                    +1 (555) 123-6544
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:flex lg:text-left text-center gap-5">
                <div className="flex items-center justify-center w-16 h-16 bg-text dark:bg-gray-300 dark:text-text dark:hover:text-white text-white lg:mb-0 rounded-full hover:bg-accentColor duration-200 cursor-pointer lg:mx-0 mx-auto">
                  <Mail size={30} />
                </div>
                <div className="dark:text-gray-300 lg:mt-0 mt-4">
                  <h6 className="font-semibold uppercase text-lg text-text">
                    Email Address
                  </h6>
                  <p className="mt-2 leading-6">
                    contact@bikerentals.com <br />
                    info@bikerentals.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default ContactInfo;
