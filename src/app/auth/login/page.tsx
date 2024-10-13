"use client";
import Loading from "@/app/(generalLayout)/loading";
import FContainer from "@/components/ui/Container";
import FButton from "@/components/ui/FButton";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import FSectionTitle from "@/components/ui/FSectionTitle";
import { useUserContext } from "@/context/auth.provider";
import { useAuthMutation } from "@/hooks/auth";
import { loginSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const defaultValues = {
  email: "junayednoman6@gmail.com",
  password: "noman05",
};

const LoginForm = () => {
  const { setLoading: setUserLoading } = useUserContext();
  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirect") || "/";
  const router = useRouter();

  const {
    mutate: handleLogin,
    isPending,
    isError,
    isSuccess,
  } = useAuthMutation("register", "/auth/login");

  // redirect if logged in
  useEffect(() => {
    if (!isPending && !isError && isSuccess) {
      router.push(redirectTo);
    }
  }, [isPending, isError, isSuccess]);

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    handleLogin(data);
    setUserLoading(true);
  };

  return (
    <FContainer>
      <div className="md:max-w-[500px] mx-auto w-full md:py-20 py-16">
        <FSectionTitle heading="Login" subHeading="Login to your account" />
        <FForm
          defaultValues={defaultValues}
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
              label="Password"
              placeholder="Enter your password"
            />
            <FButton wFull htmlType="submit">
              {isPending ? "Loading..." : "Login"}
            </FButton>
          </div>
        </FForm>
        <div className="mt-8 flex justify-between items-center sm:text-base text-[15px]">
          <p>
            Don’t have an account?{" "}
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

const Login = () => (
  <Suspense fallback={<Loading />}>
    <LoginForm />
  </Suspense>
);

export default Login;
