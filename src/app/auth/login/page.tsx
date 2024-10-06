"use client";
import FContainer from "@/components/ui/Container";
import FButton from "@/components/ui/FButton";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FSectionTitle from "@/components/ui/FSectionTitle";
import { loginSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("data, ", data);
  };
  return (
    <FContainer>
      <div className="md:max-w-[500px] mx-auto w-full md:py-20 py-16">
        <FSectionTitle heading="Login" subHeading="Login to your account" />
        <FForm
          resolver={zodResolver(loginSchema)}
          handleFormSubmit={handleFormSubmit}
        >
          <div className="space-y-3 mt-9">
            <FInput
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
            <FInput
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
            <FButton wFull htmlType="submit">
              Login
            </FButton>
          </div>
        </FForm>
        <div className="mt-8 flex justify-between items-center sm:text-base text-[15px]">
          <p>
            Don not have an account?{" "}
            <Link className=" font-semibold text-accent" href="/auth/register">
              Register
            </Link>
          </p>
          <p className="sm:text-base text-[15px] font-semibold text-accent">
            <Link
              className=" font-semibold text-accent"
              href="/auth/forget-password"
            >
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </FContainer>
  );
};

export default Login;
