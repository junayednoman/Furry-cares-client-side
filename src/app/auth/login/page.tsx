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
import { Collapse, CollapseProps } from "antd";
import { ArrowLeft } from "lucide-react";
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

  const accordionItems: CollapseProps["items"] = [
    {
      key: "1",
      label: "Login Credentials",
      children: (
        <div className="flex items-center flex-wrap gap-6">
          <div>
            <h4>Admin</h4>
            <p>email: junayednoman055@gmail.com</p>
            <p>pass: noman05</p>
          </div>
          <div>
            <h4>User</h4>
            <p>email: junayednoman6@gmail.com</p>
            <p>pass: noman05</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <FContainer>
      <div className="md:ml-24 ml-4 sm:mt-10 mt-6">
        <Link
          href={"/"}
          className="text-xl font-medium flex w-fit items-center gap-2"
        >
          <ArrowLeft size={25} />
          Back to home
        </Link>
      </div>
      <div className="md:max-w-[500px] mx-auto w-full md:py-20 py-16">
        <FSectionTitle heading="Login" subHeading="Login to your account" />
        <div className="flex gap-1 my-6">
          <Collapse items={accordionItems} />
        </div>
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
