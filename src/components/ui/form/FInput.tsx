import { Col, Form, Input } from "antd";
import { Controller } from "react-hook-form";
import RInputError from "./FInputError";
type TInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  disabled?: boolean;
  colSpanLg?: number;
  colSpanMd?: number;
};

const FInput = ({
  name,
  label,
  placeholder,
  type,
  disabled,
  colSpanLg,
  colSpanMd,
}: TInputProps) => {
  return (
    <Col
      span={24}
      lg={{ span: colSpanLg }}
      md={{ span: colSpanMd }}
      className="mx-auto"
    >
      <div className="flex items-center justify-center">
        <Controller
          name={name}
          render={({ field, fieldState: error }) => (
            <div className="w-full">
              <Form.Item
                htmlFor={name}
                label={label}
                className="mb-3 font-semibold text-text"
              >
                <Input
                  {...field}
                  id={name}
                  type={type}
                  placeholder={placeholder}
                  disabled={disabled}
                  className="block font-normal rounded-[4px] dark:bg-primaryColor dark:border-gray-500 focus:border-text focus:shadow-none hover:border-text text-primaryColor dark:text-gray-300 hover:dark:bg-primaryColor hover:dark:border-gray-300 focus:dark:bg-primaryColor focus:dark:border-gray-300 placeholder:dark:text-gray-400"
                  size="large"
                />
                {error && (
                  <RInputError message={error?.error?.message as string} />
                )}
              </Form.Item>
            </div>
          )}
        />
      </div>
    </Col>
  );
};

export default FInput;
