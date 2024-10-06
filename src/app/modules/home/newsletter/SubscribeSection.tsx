"use client";
import FContainer from "@/components/ui/Container";
import FButton from "@/components/ui/FButton";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FSectionTitle from "@/components/ui/FSectionTitle";
import { subscriptionSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";

const SubscribeSection = () => {
  const handleForm: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };

  return (
    <div className="md:py-20 py-16 ">
      <FContainer>
        <div className="col-span-2 sm:w-[500px] w-full mx-auto">
          <FSectionTitle
            heading="Subscribe to our newsletter"
            subHeading="Get the latest tips, stories, and updates"
          />
          <div className="mt-10">
            <FForm
              resolver={zodResolver(subscriptionSchema)}
              handleFormSubmit={handleForm}
            >
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
      </FContainer>
    </div>
  );
};

export default SubscribeSection;
