"use client";
/* eslint-disable react/no-unescaped-entities */
import quoteImg from "@/assets/quotation.png";
import FContainer from "@/components/ui/Container";
import FButton from "@/components/ui/FButton";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FSectionTitle from "@/components/ui/FSectionTitle";
import Image from "next/image";
import { FieldValues, SubmitHandler } from "react-hook-form";

const SubscribeSection = () => {
  const handleForm: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };
  return (
    <div className="md:py-20 py-16 ">
      <FContainer>
        <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-x-16 items-center gap-y-6">
          <div className="col-span-2">
            <FSectionTitle
              align="left"
              heading="Subscribe to our newsletter"
              subHeading="Get the latest tips, stories, and updates"
            />
            <div className="mt-10">
              <FForm handleFormSubmit={handleForm}>
                <div className="space-y-3">
                  <FInput
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                  />
                  <FInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                  />
                  <div className="text-center">
                    <FButton wFull={true} htmlType="submit">
                      Subscribe
                    </FButton>
                  </div>
                </div>
              </FForm>
            </div>
          </div>
          <div className="col-span-3 border-solid border border-slate-200 sm:px-16 px-12 py-10 rounded-md">
            <div className="text-center">
              <Image src={quoteImg} width={70} height={70} alt="pets" />

              <p className="font-medium italic sm:text-base text-[15px] text-slate-500 sm:leading-7 leading-6">
                "This platform has truly been a lifesaver for me as a pet owner!
                The combination of expert tips and heartwarming stories makes it
                an essential resource. I’ve learned so much about caring for my
                furry friend, and the community of pet lovers here is
                incredible!"
              </p>
              <h4 className="text-text font-semibold mt-3">Jane Smith</h4>
              <p className="text-sm text-slate-500">Pet Owner</p>
            </div>
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default SubscribeSection;
