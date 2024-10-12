import FButton from "@/components/ui/FButton";
import FForm from "@/components/ui/form/FForm";
import FInput from "@/components/ui/form/FInput";
import { useUserContext } from "@/context/auth.provider";
import { useAuthMutation } from "@/hooks/auth";
import { loginSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "antd";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const LoginModal = ({ isModalOpen, setIsModalOpen }: TModalProps) => {
  const { setLoading: setUserLoading } = useUserContext();
  const { mutateAsync: handleLogin, isPending } = useAuthMutation(
    "register",
    "/auth/login"
  );

  const handleLoginForm = async (data: FieldValues) => {
    await handleLogin(data);
    setUserLoading(true);
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Login to your continue"
      className="sm:min-w-[550px] w-full p-0"
      footer={null}
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
    >
      <FForm
        resolver={zodResolver(loginSchema)}
        handleFormSubmit={handleLoginForm}
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
          <FButton disabled={isPending} wFull htmlType="submit">
            {isPending ? "logging in..." : "Login"}
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
    </Modal>
  );
};

export default LoginModal;
