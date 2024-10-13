"use client";
import FContainer from "@/components/ui/Container";
import FButton from "@/components/ui/FButton";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FSectionTitle from "@/components/ui/FSectionTitle";
import { usePost } from "@/hooks/mutation";
import { forgetPasswordSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ForgetPassword = () => {
  const { mutate, isPending } = usePost(
    "forget-password",
    "/auth/forget-password"
  );
  const handleForgetPassword: SubmitHandler<FieldValues> = (data) => {
    mutate({ email: data?.email });
  };

  return (
    <FContainer>
      <div className="md:max-w-[500px] mx-auto w-full md:py-20 py-16">
        <FSectionTitle heading="Forgot password?" />
        <p className="text-center mt-3">
          Enter your email below to request a password reset.
        </p>
        <FForm
          resolver={zodResolver(forgetPasswordSchema)}
          handleFormSubmit={handleForgetPassword}
        >
          <div className="space-y-3 mt-9">
            <FInput
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email address"
            />

            <FButton disabled={isPending} wFull htmlType="submit">
              {isPending ? "Sending..." : "Send"}
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
