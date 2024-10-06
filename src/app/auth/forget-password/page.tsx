"use client";
import FContainer from "@/components/ui/Container";
import FButton from "@/components/ui/FButton";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FSectionTitle from "@/components/ui/FSectionTitle";
import { registrationSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ForgetPassword = () => {
  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };
  return (
    <FContainer>
      <div className="md:max-w-[500px] mx-auto w-full md:py-20 py-16">
        <FSectionTitle heading="Forgot password?" />
        <p className="text-center mt-3">
          Enter your email below to request a password reset.
        </p>
        <FForm
          resolver={zodResolver(registrationSchema)}
          handleFormSubmit={handleFormSubmit}
        >
          <div className="space-y-3 mt-9">
            <FInput
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email address"
            />

            <FButton wFull htmlType="submit">
              Submit
            </FButton>
          </div>
        </FForm>
        <div className="mt-8">
          <p>
            Go back to the{" "}
            <Link className=" font-semibold text-accent" href="/auth/login">
              Login
            </Link>{" "}
            page
          </p>
        </div>
      </div>
    </FContainer>
  );
};

export default ForgetPassword;
