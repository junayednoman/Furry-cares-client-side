"use client";
import FContainer from "@/components/ui/Container";
import FButton from "@/components/ui/FButton";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FSectionTitle from "@/components/ui/FSectionTitle";
import { registrationSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ResetPassword = () => {
  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };
  return (
    <FContainer>
      <div className="md:max-w-[500px] mx-auto w-full md:py-20 py-16">
        <FSectionTitle
          heading="Reset Password"
          subHeading="Reset your password"
        />
        <FForm
          resolver={zodResolver(registrationSchema)}
          handleFormSubmit={handleFormSubmit}
        >
          <div className="space-y-3 mt-9">
            <FInput
              name="password"
              label="New Password"
              placeholder="Enter your password"
            />

            <FButton wFull htmlType="submit">
              Reset
            </FButton>
          </div>
        </FForm>
      </div>
    </FContainer>
  );
};

export default ResetPassword;
