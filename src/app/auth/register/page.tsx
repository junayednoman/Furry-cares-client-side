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

const Register = () => {
  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };
  return (
    <FContainer>
      <div className="md:max-w-[500px] mx-auto w-full md:py-20 py-16">
        <FSectionTitle heading="Register" subHeading="Create your account" />
        <FForm
          resolver={zodResolver(registrationSchema)}
          handleFormSubmit={handleFormSubmit}
        >
          <div className="space-y-3 mt-9">
            <FInput name="name" label="Name" placeholder="Enter your name" />
            <FInput
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
            <FInput
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
            <FInput
              name="designation"
              placeholder="Enter your designation"
              label="Designation"
            />
            <FButton htmlType="submit">Register</FButton>
          </div>
        </FForm>
        <div className="mt-8">
          <p>
            Already have an account?{" "}
            <Link className=" font-semibold text-accent" href="/auth/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </FContainer>
  );
};

export default Register;
